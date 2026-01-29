"use client";
import React from "react";
import {
  Inventory,
  ShoppingCart,
  Insights,
  CloudDone,
  Smartphone,
  CheckCircle,
  BarChart,
  Speed,
  Groups,
} from "@mui/icons-material";
import {
  Grid,
  Typography,
  Button,
  Container,
  Card,
  Stack,
  Box,
  Divider,
  Fade,
} from "@mui/material";
import GlobalNetwork from "../../component/three/GlobalNetwork"; // 3D Component
import Copyrights from "@/app/component/copyright/page";

const ConsumerGoodsLandingPage: React.FC = () => {
  const PURPLE = "rgb(116, 40, 148)";
  const DARK = "rgb(30, 30, 30)";

  const solutions = [
    { title: "ERP & Manufacturing Automation", icon: <Inventory />, desc: "Digitize production and inventory management with real-time tracking." },
    { title: "Retail & E-Commerce", icon: <ShoppingCart />, desc: "Scalable platforms connecting your brand directly to customers." },
    { title: "Customer Experience", icon: <Groups />, desc: "Leverage data to understand buying behavior and automate loyalty." },
    { title: "Demand Forecasting", icon: <Insights />, desc: "AI-driven models to predict trends and optimize supply planning." },
    { title: "Cloud & Mobility", icon: <CloudDone />, desc: "Unified dashboards and mobile apps accessible anytime, anywhere." },
  ];

  return (
    <Grid container direction="column" sx={{ bgcolor: "white", minHeight: "100vh" }}>
      
      {/* 1. HERO SECTION */}
      <Grid item sx={{ position: "relative", bgcolor: DARK, py: { xs: 15, md: 22 }, overflow: "hidden" }}>
        <GlobalNetwork />
        
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Fade in={true} timeout={1200}>
            <Stack spacing={3} alignItems="center" textAlign="center">
              <Typography variant="overline" sx={{ color: PURPLE, fontWeight: 800, letterSpacing: 5 }}>
                DIGITAL REINVENTION
              </Typography>
              <Typography variant="h1" fontWeight={900} sx={{ color: "white", fontSize: { xs: '2.5rem', md: '4rem' }, maxWidth: 900 }}>
                Consumer Goods Industry <br /> 
                <span style={{ color: PURPLE }}>Software Solutions</span>
              </Typography>
              <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 750 }}>
                Reinventing the marketplace through digital acceleration—streamlining operations, boosting engagement, and unlocking data-powered growth.
              </Typography>
              <Button variant="contained" size="large" sx={{ bgcolor: PURPLE, py: 2, px: 6, mt: 4, borderRadius: 0, fontWeight: 'bold' }}>
                Join the Revolution
              </Button>
            </Stack>
          </Fade>
        </Container>
      </Grid>

      {/* 2. SUPPLY CHAIN FOCUS */}
      <Grid item sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" fontWeight={800} gutterBottom>
                Powering the <span style={{ color: PURPLE }}>Digital Supply Chain</span>
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: '1.1rem', mb: 3 }}>
                From manufacturers to retailers, visibility and efficiency are key. We build custom software that unifies production, inventory, and customer data.
              </Typography>
              <Stack spacing={2}>
                {["Accurate Demand Forecasting", "Reduced Waste", "Omnichannel Consistency"].map((text, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="center">
                    <CheckCircle sx={{ color: PURPLE }} />
                    <Typography fontWeight="bold">{text}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid sx={{ p: 4, bgcolor: DARK, color: "white", borderLeft: `8px solid ${PURPLE}` }}>
                <Typography variant="h5" fontWeight="bold" mb={2}>Agile. Responsive. Connected.</Typography>
                <Typography sx={{ opacity: 0.8 }}>
                  Our expertise helps you stay ahead in a marketplace where speed and personalization define brand success.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      {/* 3. SOLUTIONS GRID */}
      <Grid item sx={{ py: 10, bgcolor: "#f9f9f9" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight={900} textAlign="center" mb={8}>Specialized Solutions</Typography>
          <Grid container spacing={3}>
            {solutions.map((s, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card elevation={0} sx={{ p: 4, height: '100%', border: '1px solid #eee', transition: '0.3s', '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' } }}>
                  <Grid sx={{ color: PURPLE, mb: 2 }}>{s.icon}</Grid>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>{s.title}</Typography>
                  <Typography color="text.secondary" variant="body2">{s.desc}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>

      {/* 4. BUSINESS OUTCOMES STRIP */}
      <Grid item sx={{ py: 10, bgcolor: DARK, color: "white" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight={800} textAlign="center" mb={8}>Transforming Outcomes</Typography>
          <Grid container spacing={4}>
            {[
              { icon: <BarChart />, label: "Real-time Sales Insights" },
              { icon: <Speed />, label: "Faster Time-to-Market" },
              { icon: <Insights />, label: "Personalized Engagement" },
              { icon: <CloudDone />, label: "Cloud Scalability" }
            ].map((item, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Stack alignItems="center" spacing={2}>
                  <Grid sx={{ p: 2, borderRadius: '50%', border: `1px solid ${PURPLE}`, color: PURPLE }}>{item.icon}</Grid>
                  <Typography textAlign="center" fontWeight="bold">{item.label}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>

      {/* 5. CTA SECTION */}
      <Grid item sx={{ py: 12, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={900} mb={3}>Let’s Build the Next Generation Together</Typography>
          <Typography color="text.secondary" mb={5}>
            Turn business challenges into competitive advantages with modern software and deep industry understanding.
          </Typography>
          <Button variant="outlined" sx={{ color: PURPLE, borderColor: PURPLE, px: 6, py: 1.5, borderRadius: 0, fontWeight: 'bold' }}>
            Work With Our Team
          </Button>
        </Container>
      </Grid>

      <Divider />
      <Copyrights/>
    </Grid>
  );
};

export default ConsumerGoodsLandingPage;