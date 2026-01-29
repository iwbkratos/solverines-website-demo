"use client"
import React from "react";
import {
  Cloud, TrendingUp, CheckCircle, Code, RadioButtonChecked,
  BarChart, Repeat,
} from "@mui/icons-material";
import {
  Button, Container, Typography, Card, CardContent,
  Stack, Divider, Grid, Fade
} from "@mui/material";

// Import the background component
import VehicleBackground from "../../component/three/VehicleDigitalTwin";
import Copyrights from "@/app/component/copyright/page";

const AutomotiveLandingPage: React.FC = () => {
  // Your Data
  const challenges = [
    "Complex Supply Chains: Managing multi-tier suppliers, inventory, and logistics in real time.",
    "Data Integration & Visibility: Disparate systems lead to inefficiencies and delayed insights.",
    "Connected Vehicle Technologies: Need for secure IoT and telematics integration.",
    "Customer Experience: Rising expectations for digital engagement and personalization.",
    "Sustainability & Compliance: Meeting regulatory standards while optimizing production and emissions.",
  ];

  const solutions = [
    { icon: <Code sx={{ fontSize: 48, color: "rgb(116,40,148)" }} />, title: "Custom Software Development", description: "Tailor-made web and mobile applications for production tracking, dealer management, and customer engagement." },
    { icon: <RadioButtonChecked sx={{ fontSize: 48, color: "rgb(116,40,148)" }} />, title: "IoT & Connected Vehicle Solutions", description: "Integrate IoT sensors, telematics, and real-time analytics for vehicle monitoring, predictive maintenance, and driver insights." },
    { icon: <Cloud sx={{ fontSize: 48, color: "rgb(116,40,148)" }} />, title: "Cloud & Enterprise Modernization", description: "Migrate legacy systems to secure, scalable cloud platforms — enabling automation, faster deployments, and cost efficiency." },
    { icon: <BarChart sx={{ fontSize: 48, color: "rgb(116,40,148)" }} />, title: "Data Analytics & AI Integration", description: "Use AI and machine learning to predict maintenance, optimize logistics, and analyze vehicle performance data." },
    { icon: <Repeat sx={{ fontSize: 48, color: "rgb(116,40,148)" }} />, title: "Automation & Workflow Optimization", description: "Implement RPA and intelligent workflow solutions to streamline production, quality control, and logistics management." },
  ];

  const impacts = [
    "30–40% improvement in operational efficiency",
    "Real-time visibility across supply chain and production lines",
    "Reduced downtime through predictive maintenance solutions",
    "Enhanced customer satisfaction with personalized digital experiences",
    "Improved compliance and sustainability tracking",
  ];

  const whyChoose = [
    { title: "Automotive Domain Expertise", description: "Years of experience delivering technology solutions for manufacturers and mobility innovators." },
    { title: "End-to-End Delivery", description: "From strategy and design to deployment and maintenance." },
    { title: "Agile & Scalable Teams", description: "Rapid development cycles with flexible engagement models." },
    { title: "Technology Excellence", description: "Expertise in .NET, React, AWS, Azure, and AI frameworks." },
    { title: "Long-Term Partnership", description: "We build lasting relationships focused on innovation, reliability, and measurable growth." },
  ];

  return (
    <Grid sx={{ bgcolor: "white", color: "black", minHeight: "100vh" }}>
      
      {/* 1. HERO SECTION WITH 3D BACKGROUND */}
      <Grid
        sx={{
          position: "relative", // Required for background
          overflow: "hidden",
          py: { xs: 15, md: 20 },
          bgcolor: "rgb(30,30,30)", // Fallback color
        }}
      >
        <VehicleBackground />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Fade in={true} timeout={1000}>
            <Grid container>
              <Grid item xs={12} md={8} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography sx={{ color: "grey.100", mb: 2 }} variant="h2" fontWeight="900" gutterBottom>
                  Automotive Software Development Services
                </Typography>
                <Typography variant="h5" sx={{ color: "rgb(200,150,220)", mb: 3, fontWeight: 500 }}>
                  Driving Digital Transformation in the Automotive Sector
                </Typography>
                <Typography sx={{ color: "rgba(226, 203, 235, 0.8)", mb: 5, maxWidth: 700 }} fontSize="1.2rem">
                  The automotive industry is evolving faster than ever — from connected
                  vehicles and smart manufacturing to AI-driven supply chains. Our software development services empower
                  automotive companies to accelerate innovation.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "rgb(116,40,148)",
                    color: "white",
                    fontWeight: "bold",
                    px: 6,
                    py: 2,
                    borderRadius: 0,
                    "&:hover": { bgcolor: "rgb(96,30,128)" },
                  }}
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </Fade>
        </Container>
      </Grid>

      {/* 2. INDUSTRY CHALLENGES */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={2}>
          Industry Challenges
        </Typography>
        <Typography textAlign="center" sx={{ color: "gray", mb: 5, fontSize: "1.1rem" }}>
          Automotive businesses face complex challenges in today's connected world:
        </Typography>
        <Card sx={{ backgroundColor: "white", border: "1px solid rgb(116,40,148)", borderRadius: 0, maxWidth: 800, mx: "auto", p: 4 }}>
          <Stack spacing={3}>
            {challenges.map((item, i) => (
              <Stack direction="row" spacing={2} key={i} alignItems="flex-start">
                <CheckCircle sx={{ color: "rgb(116,40,148)" }} />
                <Typography color="black" fontWeight={500}>{item}</Typography>
              </Stack>
            ))}
          </Stack>
        </Card>
      </Container>

      {/* 3. SOLUTIONS GRID */}
      <Grid sx={{ py: 10, bgcolor: "rgba(116,40,148, 0.02)" }}>
        <Container>
          <Typography variant="h4" textAlign="center" fontWeight="bold" mb={6}>
            Our Software Development Solutions
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {solutions.map((s, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "white",
                    borderBottom: "4px solid rgb(116,40,148)",
                    borderRadius: 0,
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-10px)", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Grid mb={2}>{s.icon}</Grid>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>{s.title}</Typography>
                    <Typography color="text.secondary">{s.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>

      {/* 4. BUSINESS IMPACT */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={6}>
          Business Impact
        </Typography>
        <Grid container spacing={3}>
          {impacts.map((impact, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Card sx={{ bgcolor: "rgb(30,30,30)", color: "white", borderRadius: 0 }}>
                <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <TrendingUp sx={{ color: "rgb(116,40,148)", fontSize: 32 }} />
                  <Typography fontWeight="bold">{impact}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 5. WHY CHOOSE US */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={8}>
          Why Choose Us
        </Typography>
        <Grid container spacing={6}>
          {whyChoose.map((w, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Stack direction="row" spacing={3}>
                <CheckCircle sx={{ color: "rgb(116,40,148)", fontSize: 32 }} />
                <Stack>
                  <Typography variant="h6" fontWeight="bold">{w.title}</Typography>
                  <Typography color="text.secondary">{w.description}</Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 6. FINAL CTA */}
      <Grid sx={{ py: 12, textAlign: "center", background: "linear-gradient(45deg, rgb(30,30,30), rgb(50,50,50))", color: "white" }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" mb={3}>
            Transform Your Automotive Operations
          </Typography>
          <Typography sx={{ color: "grey.400", mb: 5 }}>
            Whether you're a manufacturer or mobility startup, we help you harness technology to drive smarter growth.
          </Typography>
          <Button
            variant="contained"
            sx={{ bgcolor: "rgb(116,40,148)", px: 6, py: 2, fontWeight: "bold", borderRadius: 0 }}
          >
            Contact Us Today
          </Button>
        </Container>
      </Grid>

      {/* FOOTER */}
      <Copyrights />
    </Grid>
  );
};

export default AutomotiveLandingPage;