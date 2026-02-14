import { Box } from "@mui/material";
import Paper from "../Paper/Paper";
import type { PDFFile } from "types/desktop";

const ExperiencePaper = ({ payload }: {payload: PDFFile["innerContent"];}) => {
    return (
        <Paper>
            <Box display='flex' flexDirection='column' gap='20px' sx={{ marginBottom: "50px" }}>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold' }}>{payload.experience.title}</Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: '50px' }}>
                {payload.experience.jobs.map(job => {
                    return (
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: "10px" }} key={job.period}>
                            <Box sx={{ fontSize: '18px', fontWeight: 'bold' }}>{job.companyName} ({job.period})</Box>
                            <Box sx={{ fontSize: '14px', display: 'flex', textDecoration: 'underline' }}>Position: {job.position}</Box>
                            <Box sx={{ fontSize: '14px', display: 'flex' }}>Tech stack: {job.techStack}</Box>
                            <ul>{job.list.map(item => {
                                return <li key={item} style={{ marginBottom: "5px" }}>{item}</li>;
                            })}</ul>
                        </Box>
                    );
                })}
            </Box>
        </Paper>
    );
};

export default ExperiencePaper;