import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
    InputAdornment,
    Alert,
    CircularProgress,
} from "@mui/material";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";

import api from "../../api/axios";

function Register() {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        try {
            setError("");
            setLoading(true);

            await api.post("/auth/register", {
                fullName: fullName.trim(),
                email: email.trim(),
                password: password,
            });

            navigate("/login");

        } catch (err) {
            console.error("REGISTER ERROR:", err);

            setError(
                err.response?.data?.message ||
                err.response?.data?.error ||
                "Registration failed."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                    "linear-gradient(135deg, #312E81 0%, #6D28D9 45%, #9333EA 100%)",
            }}
        >
            <Card
                sx={{
                    width: 430,
                    borderRadius: 5,
                    boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
                    background: "rgba(255,255,255,0.94)",
                    backdropFilter: "blur(14px)",
                }}
            >
                <CardContent sx={{ p: 5 }}>

                    {/* Logo */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 2,
                        }}
                    >
                        <Box
                            sx={{
                                width: 64,
                                height: 64,
                                borderRadius: 4,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background:
                                    "linear-gradient(135deg, #6C63FF, #8B5CF6)",
                                color: "white",
                                boxShadow:
                                    "0 10px 30px rgba(108,99,255,0.45)",
                            }}
                        >
                            <BugReportOutlinedIcon fontSize="large" />
                        </Box>
                    </Box>

                    <Typography
                        variant="h4"
                        align="center"
                        fontWeight={800}
                    >
                        Create Account
                    </Typography>

                    <Typography
                        align="center"
                        color="text.secondary"
                        sx={{ mb: 3 }}
                    >
                        Join QACraft
                    </Typography>

                    {error && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {error}
                        </Alert>
                    )}

                    {/* Full Name */}
                    <TextField
                        label="Full Name"
                        fullWidth
                        margin="normal"
                        value={fullName}
                        onChange={(e) =>
                            setFullName(e.target.value)
                        }
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* Email */}
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* Password */}
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* Register Button */}
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleRegister}
                        disabled={loading}
                        sx={{
                            mt: 3,
                            py: 1.5,
                            borderRadius: 3,
                            fontWeight: 700,
                            textTransform: "none",
                            fontSize: 16,
                            background:
                                "linear-gradient(135deg, #6C63FF, #8B5CF6)",
                            boxShadow:
                                "0 10px 25px rgba(108,99,255,0.35)",
                            "&:hover": {
                                background:
                                    "linear-gradient(135deg, #5B54E8, #7C3AED)",
                            },
                        }}
                    >
                        {loading ? (
                            <CircularProgress
                                size={24}
                                color="inherit"
                            />
                        ) : (
                            "Create Account"
                        )}
                    </Button>

                    {/* Login */}
                    <Typography
                        align="center"
                        sx={{
                            mt: 3,
                            color: "text.secondary",
                            fontSize: 14,
                        }}
                    >
                        Already have an account?{" "}
                        <Box
                            component="span"
                            onClick={() => navigate("/login")}
                            sx={{
                                color: "#6D28D9",
                                fontWeight: 700,
                                cursor: "pointer",
                            }}
                        >
                            Sign in
                        </Box>
                    </Typography>

                </CardContent>
            </Card>
        </Box>
    );
}

export default Register;