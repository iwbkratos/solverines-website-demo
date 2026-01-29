"use client";
import React from "react";
import {
  LocalShipping,
  Warehouse,
  Route,
  Visibility,
  Terminal,
  TrendingUp,
  Speed,
  WorkspacePremium,
  ArrowForward,
} from "@mui/icons-material";
import {
  Typography,
  Button,
  Container,
  Grid,
  Card,
  Stack,
  Divider,
  Fade,
  Slide,
} from "@mui/material";
import LogisticsFlow from "../../component/three/LogisticsFlow"; // 3D Component

const LogisticsLandingPage: React.FC = () => {
  const PURPLE = "rgb(116, 40, 148)";
  const DARK_GREY = "rgb(30, 30, 30)";
  const WHITE = "#FFFFFF";

  const solutions = [
    { title: "TMS", icon: <LocalShipping />, desc: "Shipment planning, carrier management, and freight auditing." },
    { title: "WMS", icon: <Warehouse />, desc: "Inventory tracking and data-driven space optimization." },
    { title: "Route AI", icon: <Route />, desc: "Predictive analytics to optimize routes and cut fuel costs." },
    { title: "Visibility", icon: <Visibility />, desc: "End-to-end monitoring for location and temperature." },
    { title: "Automation", icon: <Terminal />, desc: "Seamlessly connect ERP, CRM, and IoT systems." },
  ];

  return (
    <Grid container direction="column" sx={{ bgcolor: WHITE, minHeight: "100vh" }}>
      
      {/* HERO SECTION */}
      <Grid item sx={{ position: "relative", bgcolor: DARK_GREY, overflow: "hidden", py: 15 }}>
        <LogisticsFlow />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container>
            <Grid item xs={12} md={8}>
              <Slide direction="up" in={true} timeout={800}>
                <Stack spacing={3}>
                  <Typography variant="h6" sx={{ color: PURPLE, fontWeight: 700, letterSpacing: 2 }}>
                    LOGISTICS & SUPPLY CHAIN
                  </Typography>
                  <Typography variant="h2" fontWeight={900} sx={{ color: WHITE, lineHeight: 1.1 }}>
                    Driving Efficiency Across the <br /> 
                    <span style={{ color: PURPLE }}>Supply Chain</span>
                  </Typography>
                  <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 600 }}>
                    Modernize your operations with real-time data, automation, and intelligent route optimization.
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Button variant="contained" size="large" sx={{ bgcolor: PURPLE, py: 2, px: 5, borderRadius: 0 }}>
                        Get a Free Audit
                      </Button>
                    </Grid>
                  </Grid>
                </Stack>
              </Slide>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      {/* STRATEGIC INTRO */}
      <Grid item sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={10} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" fontWeight={800} gutterBottom>
                Smart Logistics. <br /> 
                <span style={{ color: PURPLE }}>Smarter Business.</span>
              </Typography>
              <Divider sx={{ width: 100, height: 5, bgcolor: PURPLE, mb: 4 }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.2rem', mb: 3 }}>
                We design software that empowers logistics providers to streamline every step — from order management to last-mile delivery.
              </Typography>
              <Typography variant="body1" fontWeight={700}>
                Integrating IoT, AI, and Cloud to make your network faster and transparent.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>

{/* SPECIALIZED SOLUTIONS SYMMETRIC GRID */}
<Grid item sx={{ py: 10, bgcolor: "rgba(116, 40, 148, 0.03)" }}>
  <Container maxWidth="lg">
    <Typography variant="h4" fontWeight={900} mb={6} textAlign="center">
      Our Specialized Solutions
    </Typography>
    <Grid container spacing={3}>
      {solutions.map((s, i) => (
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={4} // This ensures 3 equal columns on desktop
          key={i} 
          sx={{ display: "flex" }} // Forces the Grid item to be a flex container
        >
          <Card 
            elevation={0} 
            sx={{ 
              p: 4, 
              width: "100%", // Ensures card takes full width of grid column
              display: "flex", 
              flexDirection: "column", 
              height: '100%', // Makes all cards in a row the same height
              border: '1px solid rgba(0,0,0,0.08)', 
              borderRadius: 0, // Keeping the professional 'Solverines' sharp edge
              transition: '0.3s all ease-in-out', 
              '&:hover': { 
                borderColor: PURPLE, 
                transform: 'translateY(-8px)',
                boxShadow: "0 12px 30px rgba(116, 40, 148, 0.1)"
              } 
            }}
          >
            <Stack spacing={3}>
              <Grid 
                sx={{ 
                  width: 60, 
                  height: 60, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  bgcolor: DARK_GREY, 
                  color: WHITE 
                }}
              >
                {/* Ensure your icons are scaled properly */}
                {React.cloneElement(s.icon as React.ReactElement, { sx: { fontSize: 30 } })}
              </Grid>
              
              <Stack spacing={1.5}>
                <Typography variant="h5" fontWeight={800} sx={{ lineHeight: 1.2 }}>
                  {s.title}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                  {s.desc}
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
</Grid>

      {/* MEASURABLE OUTCOMES BAR */}
      <Grid item sx={{ bgcolor: DARK_GREY, py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between">
            {[
              { val: "30-50%", label: "Reduction in Delays", icon: <Speed /> },
              { val: "REAL-TIME", label: "Operational Insights", icon: <TrendingUp /> },
              { val: "LOWER", label: "Maintenance Costs", icon: <WorkspacePremium /> }
            ].map((stat, i) => (
              <Grid item xs={12} md={3} key={i}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ color: WHITE }}>
                  <Grid sx={{ color: PURPLE }}>{stat.icon}</Grid>
                  <Stack>
                    <Typography variant="h4" fontWeight={900}>{stat.val}</Typography>
                    <Typography variant="caption" sx={{ opacity: 0.6, letterSpacing: 1 }}>{stat.label.toUpperCase()}</Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>

      {/* FOOTER CTA */}
      <Grid item sx={{ py: 12, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Stack spacing={4} alignItems="center">
            <Typography variant="h3" fontWeight={800}>
              Innovation That Moves You Forward
            </Typography>
            <Typography variant="h6" color="text.secondary">
              From warehouse to doorstep — we make your supply chain future-ready.
            </Typography>
            <Button variant="outlined" size="large" endIcon={<ArrowForward />} sx={{ borderColor: PURPLE, color: PURPLE, px: 6, py: 2, borderWidth: 2, '&:hover': { borderWidth: 2 } }}>
              Discuss Your Project
            </Button>
          </Stack>
        </Container>
      </Grid>

      {/* SUB-FOOTER */}
      <Grid item sx={{ py: 4, bgcolor: "rgba(0,0,0,0.02)", borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          © 2025 Solverines Technology Solutions. All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LogisticsLandingPage;