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
    CircularProgress
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import api from "../../api/axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
    try {
        setError("");
        setLoading(true);

        const response = await api.post("/auth/login", {
            email: email.trim(),
            password: password,
        });

        console.log("LOGIN SUCCESS:", response.data);

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("email", response.data.email);

        navigate("/dashboard");

    } catch (err) {
        console.error("LOGIN ERROR:", err);

        console.log("STATUS:", err.response?.status);
        console.log("RESPONSE:", err.response?.data);

        setError(
            err.response?.data?.message ||
            err.response?.data?.error ||
            err.message ||
            "Login failed."
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
                overflow: "hidden",
                alignItems: "center",
                justifyContent: "center",
                background:
                    "linear-gradient(135deg, #312E81 0%, #6D28D9 45%, #9333EA 100%)"
            }}
        >
            <Card
                sx={{
                    width: 430,
                    borderRadius: 5,
                    boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(14px)",
                }}
            >
                <CardContent sx={{ p: 5 }}>
                    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                        <Box
                            sx={{
                                width: 64,
                                height: 64,
                                borderRadius: 4,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "linear-gradient(135deg, #6C63FF, #8B5CF6)",
                                color: "white",
                                boxShadow: "0 10px 30px rgba(108,99,255,0.45)",
                            }}
                        >
                            <BugReportOutlinedIcon fontSize="large" />
                        </Box>
                    </Box>

                    <Typography variant="h4" align="center" fontWeight={800}>
                        QACraft
                    </Typography>

                    <Typography align="center" color="text.secondary" sx={{ mb: 4 }}>
                        Test Management Platform
                    </Typography>

                    {error && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {error}
                        </Alert>
                    )}

                    <TextField
                        label="Email"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleLogin}
                        sx={{
                            mt: 3,
                            py: 1.5,
                            borderRadius: 3,
                            fontWeight: 700,
                            textTransform: "none",
                            fontSize: 16,
                            background: "linear-gradient(135deg, #6C63FF, #8B5CF6)",
                            boxShadow: "0 10px 25px rgba(108,99,255,0.35)",
                            "&:hover": {
                                background: "linear-gradient(135deg, #5B54E8, #7C3AED)",
                            },
                        }}
                    >
                        {loading ? <CircularProgress size={24} color="inherit" /> : "Sign in"}
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Login;