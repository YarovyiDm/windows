import { Box } from '@mui/material';
import Paper from "Containers/Desktop/Components/Windows/PDFWindow/Components/Paper/Paper";
import { PDFFile } from "Types/Desktop";

const GeneralPaper = ({ payload }: {payload: PDFFile["innerContent"];}) => {
    return (
        <Paper>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', fontWeight: 'bold', marginBottom: '50px' }}>{payload.title}</Box>
            <Box sx={{ marginBottom: "50px" }}>
                <Box sx={{ fontWeight: 'bold', fontSize: '18px' }}>{payload.info.name}</Box>
                <Box>Email: {payload.info.email}</Box>
                <Box>Location: {payload.info.location}</Box>
            </Box>
            <Box display='flex' flexDirection='column' gap='20px' sx={{ marginBottom: "50px" }}>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold' }}>{payload.summary.title}</Box>
                <Box sx={{ textAlign: 'center' }}>{payload.summary.text}</Box>
            </Box>
            <Box>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold' }}>{payload.techSkills.title}</Box>
                <Box>
                    <Box sx={{ fontWeight: 'bold' }}>{payload.techSkills.frontend.title}</Box>
                    <ul>{payload.techSkills.frontend.list.map(item => {
                        return <li key={item}>{item}</li>;
                    })}</ul>
                </Box>
                <Box>
                    <Box sx={{ fontWeight: 'bold' }}>{payload.techSkills.backend.title}</Box>
                    <ul>{payload.techSkills.backend.list.map(item => {
                        return <li key={item}>{item}</li>;
                    })}</ul>
                </Box>
                <Box>
                    <Box sx={{ fontWeight: 'bold' }}>{payload.techSkills.engineeringPractice.title}</Box>
                    <ul>{payload.techSkills.engineeringPractice.list.map(item => {
                        return <li key={item}>{item}</li>;
                    })}</ul>
                </Box>
                <Box>
                    <Box sx={{ fontWeight: 'bold' }}>{payload.techSkills.tools.title}</Box>
                    <ul>{payload.techSkills.tools.list.map(item => {
                        return <li key={item}>{item}</li>;
                    })}</ul>
                </Box>
            </Box>
        </Paper>
    );
};

export default GeneralPaper;