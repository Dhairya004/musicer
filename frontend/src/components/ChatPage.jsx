import ChatTabs from "./ChatTabs";
import Paper from '@mui/material/Paper';


export default function ChatPage() {
    return (
        <>
            <Paper elevation={3} style={{width: '700px', height: '100vh', padding: '20px'}}>
                <h1>Your Chats</h1>
                <ChatTabs />
            </Paper>
        </>
    );
};