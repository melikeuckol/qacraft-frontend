import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";

function Home() {
    const navigate = useNavigate();

    const features = [
        {
            icon: <ScienceOutlinedIcon />,
            title: "Test Case Management",
            description:
                "Create, organize and manage your test cases in one place.",
        },
        {
            icon: <PlayArrowIcon />,
            title: "Test Execution",
            description:
                "Track test executions and monitor pass, fail and blocked results.",
        },
        {
            icon: <BugReportOutlinedIcon />,
            title: "Bug Tracking",
            description:
                "Report, track and manage bugs throughout the testing process.",
        },
        {
            icon: <AnalyticsOutlinedIcon />,
            title: "Quality Dashboard",
            description:
                "Monitor your testing process with clear quality metrics.",
        },
    ];

    return (
        <Box
            sx={{
                height: "100vh",
                overflow: "hidden",
                background:
                    "linear-gradient(135deg, #312E81 0%, #6D28D9 45%, #9333EA 100%)",
                color: "white",
            }}
        >
            {/* Navbar */}
            <Box
                sx={{
                    height: 72,
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        variant="h5"
                        fontWeight={800}
                        sx={{ cursor: "pointer" }}
                    >
                        QACraft
                    </Typography>

                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Button
                            onClick={() => navigate("/login")}
                            sx={{
                                color: "white",
                                textTransform: "none",
                                fontWeight: 600,
                            }}
                        >
                            Sign In
                        </Button>

                        <Button
                            variant="contained"
                            onClick={() => navigate("/register")}
                            sx={{
                                px: 3,
                                borderRadius: 2.5,
                                textTransform: "none",
                                fontWeight: 700,
                                backgroundColor: "white",
                                color: "#6D28D9",
                                "&:hover": {
                                    backgroundColor: "#F3F4F6",
                                },
                            }}
                        >
                            Get Started
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* Main Content */}
            <Container
                maxWidth="lg"
                sx={{
                    height: "calc(100vh - 72px)",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Hero */}
                <Box
                    sx={{
                        flex: 1,
                        minHeight: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                >
                    <Box
                        sx={{
                            px: 2,
                            py: 0.8,
                            mb: 2,
                            borderRadius: 5,
                            backgroundColor: "rgba(255,255,255,0.12)",
                            border: "1px solid rgba(255,255,255,0.18)",
                        }}
                    >
                        <Typography
                            variant="body2"
                            fontWeight={600}
                        >
                            Modern Test Management Platform
                        </Typography>
                    </Box>

                    <Typography
                        variant="h1"
                        fontWeight={800}
                        sx={{
                            fontSize: {
                                xs: "2.8rem",
                                md: "4.5rem",
                            },
                            lineHeight: 1.05,
                            mb: 2,
                        }}
                    >
                        Manage.
                        <br />
                        Test.
                        <br />
                        Improve.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: 650,
                            color: "rgba(255,255,255,0.78)",
                            lineHeight: 1.5,
                            mb: 2.5,
                            fontWeight: 400,
                        }}
                    >
                        Organize test cases, execute tests, track bugs and
                        monitor software quality from a single platform.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            justifyContent: "center",
                        }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => navigate("/register")}
                            sx={{
                                px: 4,
                                py: 1.3,
                                borderRadius: 3,
                                textTransform: "none",
                                fontWeight: 700,
                                fontSize: 16,
                                backgroundColor: "white",
                                color: "#6D28D9",
                                "&:hover": {
                                    backgroundColor: "#F3F4F6",
                                },
                            }}
                        >
                            Get Started
                        </Button>

                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => navigate("/login")}
                            sx={{
                                px: 4,
                                py: 1.3,
                                borderRadius: 3,
                                textTransform: "none",
                                fontWeight: 700,
                                fontSize: 16,
                                color: "white",
                                borderColor:
                                    "rgba(255,255,255,0.5)",
                                "&:hover": {
                                    borderColor: "white",
                                    backgroundColor:
                                        "rgba(255,255,255,0.08)",
                                },
                            }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>

                {/* Features */}
                <Box sx={{ pb: 2 }}>
                    <Typography
                        variant="h5"
                        textAlign="center"
                        fontWeight={800}
                        sx={{ mb: 0.5 }}
                    >
                        Everything QA teams need
                    </Typography>

                    <Typography
                        textAlign="center"
                        variant="body2"
                        sx={{
                            color: "rgba(255,255,255,0.7)",
                            mb: 2,
                        }}
                    >
                        Simple tools for a structured testing workflow.
                    </Typography>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr 1fr",
                                md: "repeat(4, 1fr)",
                            },
                            gap: 2,
                        }}
                    >
                        {features.map((feature) => (
                            <Box
                                key={feature.title}
                                sx={{
                                    p: 2,
                                    borderRadius: 3,
                                    backgroundColor:
                                        "rgba(255,255,255,0.1)",
                                    border:
                                        "1px solid rgba(255,255,255,0.12)",
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 2,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mb: 1,
                                        backgroundColor:
                                            "rgba(255,255,255,0.15)",
                                    }}
                                >
                                    {feature.icon}
                                </Box>

                                <Typography
                                    variant="subtitle1"
                                    fontWeight={700}
                                    sx={{ mb: 0.5 }}
                                >
                                    {feature.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color:
                                            "rgba(255,255,255,0.68)",
                                        lineHeight: 1.4,
                                    }}
                                >
                                    {feature.description}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Footer */}
                <Box
                    sx={{
                        py: 1.5,
                        textAlign: "center",
                        borderTop:
                            "1px solid rgba(255,255,255,0.12)",
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: "rgba(255,255,255,0.45)",
                        }}
                    >
                        QACraft · Test Management Platform
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Home;