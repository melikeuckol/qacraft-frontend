import { useEffect, useState } from "react";
import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    CircularProgress,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import BugReportIcon from "@mui/icons-material/BugReport";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import api from "../../api/axios";

function Dashboard() {
    const [dashboard, setDashboard] = useState(null);

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
        const response = await api.get("/dashboard");
        setDashboard(response.data);
    };

    if (!dashboard) {
        return (
            <Box sx={{ p: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    const cards = [
        {
            title: "Test Cases",
            value: dashboard.totalTestCases,
            icon: <AssignmentIcon />,
        },
        {
            title: "Executions",
            value: dashboard.totalExecutions,
            icon: <PlayArrowIcon />,
        },
        {
            title: "Pass Rate",
            value: `${dashboard.passRate?.toFixed(1)}%`,
            icon: <CheckCircleIcon  />,
        },
        {
            title: "Fail Rate",
            value: `${dashboard.failRate?.toFixed(1)}%`,
            icon: <ErrorIcon />,
        },
        {
            title: "Open Bugs",
            value: dashboard.openBugs,
            icon: <BugReportIcon  />,
        },
        {
            title: "Critical Bugs",
            value: dashboard.criticalBugs,
            icon: <PriorityHighIcon  />,
        },
    ];

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#F5F7FB",
                p: 4,
            }}
        >
            <Typography variant="h4" fontWeight={800} mb={1}>
                QA Dashboard
            </Typography>

            <Typography color="text.secondary" mb={4}>
                Overview of test executions, bugs and quality metrics.
            </Typography>

            <Grid container spacing={3}>
                {cards.map((card) => (
                    <Grid item xs={12} sm={6} md={4} key={card.title}>
                        <Card
                            sx={{
                                borderRadius: 4,
                                boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
                            }}
                        >
                            <CardContent sx={{ p: 3 }}>
                                <Box
                                    sx={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: 3,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background: "linear-gradient(135deg, #6C63FF, #8B5CF6)",
                                        color: "white",
                                        mb: 2,
                                    }}
                                >
                                    {card.icon}
                                </Box>

                                <Typography color="text.secondary" fontWeight={600}>
                                    {card.title}
                                </Typography>

                                <Typography variant="h4" fontWeight={800} mt={1}>
                                    {card.value}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Dashboard;