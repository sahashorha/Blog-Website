import { useContext } from "react";

import { Typography, Box, styled } from "@mui/material";
import { Delete } from '@mui/icons-material';

import { API } from '../../../service/api';
import { DataContext } from "../../../context/DataProvider";

const Component = styled(Box)`
    margin-top: 30px;
    background: #F5F5F5;
    padding: 10px;
`;

const Container = styled(Box)`
    display: flex;
    margin-bottom: 5px;
`;

const Name = styled(Typography)`
    font-weight: 600;
    font-size: 18px;
    margin-right: 20px;
`;

const StyledDate = styled(Typography)`
    font-size: 14px;
    color: #878787;
`;

const DeleteIcon = styled(Delete)`
    margin-left: auto;
`;

const Comment = ({ comment, setToggle }) => {

    const { account } = useContext(DataContext)
    
    const removeComment = async () => {
        try {
            // Try to delete the comment
            const response = await API.deleteComment(comment._id);
            // Check if the response was successful
            if (response.status === 200) {
                // Toggle the state after successful deletion
                setToggle(prev => !prev);
            } else {
                // If the response is not successful, throw an error
                throw new Error(`Failed to delete comment: ${response.statusText}`);
            }
        } catch (error) {
            // Handle the error if the deletion fails
            console.error("Error deleting comment:", error.message || error);
            alert("An error occurred while deleting the comment. Please try again.");
        }
    }

    return (
        <Component>
            <Container>
                <Name>{comment.name}</Name>
                <StyledDate>{new Date(comment.date).toDateString()}</StyledDate>
                { comment.name === account.username && <DeleteIcon onClick={() => removeComment()} /> }
            </Container>
            <Typography>{comment.comments}</Typography>
        </Component>
    )
}

export default Comment;
