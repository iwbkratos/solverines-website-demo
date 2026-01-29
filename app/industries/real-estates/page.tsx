"use client"
import React from "react";
import {
  House, // Main Real Estate Icon
  ListAlt, // Listings/Lease Management
  SupervisorAccount, // CRM/Sales
  TrendingUp, // Data Analytics
  CloudDone, // Cloud/Security
  AccessTime, // Faster Sales
  PeopleAlt, // Customer Engagement
  SettingsApplications, // Automation
  InsertChart, // Actionable Insights
  Handshake, // Improved Collaboration
  ArrowForward,
} from "@mui/icons-material";
import {
  Button,
  Container,
  Typography,
  Card,
  Stack,
  Divider,
  Grid,
  Grow,
  Fade,
  Slide,
} from "@mui/material";
import Copyrights from "@/app/component/copyright/page";

const RealEstateLandingPageNoYellow: React.FC = () => {
  // --- Define the Core Color (Deep Purple, White, and Dark Grey Theme) ---
  const PRIMARY_COLOR = "rgb(116, 40, 148)"; // Deep Purple
  const SECONDARY_COLOR = "rgb(30, 30, 30)"; // Dark Contrast Color (Black/Dark Grey) - Replaces Gold/Orange
  const LIGHT_ACCENT = "rgba(116, 40, 148, 0.05)"; // Light Purple Tint
  const ACCENT_COLOR = "rgb(255, 255, 255)"; // White
  const TEXT_COLOR = "rgb(30, 30, 30)"; // Near Black

  // ---------------------------------------------------------------------
  // --- DATA MAPPING (Real Estate Content) ---
  // ---------------------------------------------------------------------

  const solutions = [
    {
      icon: <ListAlt sx={{ fontSize: 40, color: PRIMARY_COLOR }} />,
      title: "1. Real Estate Management Systems",
      description: "Centralized web and mobile platforms for property listings, bookings, lease management, and tenant communication — all in one place.",
    },
    {
      icon: <SupervisorAccount sx={{ fontSize: 40, color: PRIMARY_COLOR }} />,
      title: "2. CRM & Sales Automation",
      description: "Smart CRMs tailored for real estate workflows — track leads, manage pipelines, and automate follow-ups to close deals faster.",
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: PRIMARY_COLOR }} />,
      title: "3. Data Analytics & Predictive Insights",
      description: "Use AI-driven analytics to evaluate property trends, forecast demand, and make informed investment decisions.",
    },
    {
      icon: <CloudDone sx={{ fontSize: 40, color: PRIMARY_COLOR }} />,
      title: "4. Cloud Integration & Security",
      description: "Migrate your data and operations to secure, scalable cloud infrastructure with role-based access and advanced encryption for client confidentiality.",
    },
  ];

  const values = [
    { label: "Faster property sales and leasing cycles.", icon: <AccessTime /> },
    { label: "Increased transparency and customer engagement.", icon: <PeopleAlt /> },
    { label: "Reduced manual tasks through intelligent automation.", icon: <SettingsApplications /> },
    { label: "Actionable insights on pricing, demand, and occupancy.", icon: <InsertChart /> },
    { label: "Improved collaboration between agents, buyers, and developers.", icon: <Handshake /> },
  ];

  // ---------------------------------------------------------------------

  return (
    <Grid container direction="column" sx={{ bgcolor: ACCENT_COLOR, color: TEXT_COLOR, minHeight: "100vh" }}>

      {/* 1. HERO SECTION - High-Contrast Purple Banner */}
      <Grid
        item
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: PRIMARY_COLOR, // Deep Purple background
          overflow: 'hidden',
          color: ACCENT_COLOR,
        }}
      >
        <Container maxWidth="lg">
          <Slide direction="down" in={true} timeout={800}>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={7}>
                    <House sx={{ fontSize: 70, color: SECONDARY_COLOR, mb: 1 }}/>
                    <Typography variant="h2" fontWeight="bold" sx={{ color: ACCENT_COLOR, maxWidth: 800 }}>
                        Real Estate Industry Software Development Solutions
                    </Typography>
                    <Typography variant="h5" sx={{ color: "rgba(255, 255, 255, 0.8)", mt: 1, mb: 3 }}>
                        Transforming Real Estate with Digital Intelligence
                    </Typography>
                    <Typography sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 4, maxWidth: 800 }}>
                        Our software development services help real estate businesses go digital — enabling smarter property management, data-driven sales, and seamless customer engagement through modern, integrated platforms.
                    </Typography>
                    <Button
                        size="large"
                        endIcon={<ArrowForward />}
                        sx={{
                            bgcolor: ACCENT_COLOR, // White CTA for contrast
                            color: PRIMARY_COLOR, // Purple text
                            fontWeight: "bold",
                            px: 5,
                            py: 1.5,
                            borderRadius: 5,
                            "&:hover": { bgcolor: "rgb(240, 240, 240)", transform: 'scale(1.05)' },
                            transition: 'transform 0.3s',
                        }}
                    >
                        Start Your Digital Transformation
                    </Button>
                </Grid>
                <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                    {/* Visual element that reflects data/intelligence */}
                    <TrendingUp sx={{ fontSize: 180, color: 'rgba(255, 255, 255, 0.15)' }} />
                </Grid>
            </Grid>
          </Slide>
        </Container>
      </Grid>

      {/* 2. VALUE PROPOSITION - Full Width Emphasis */}
      <Grid item sx={{ py: 8, bgcolor: LIGHT_ACCENT }}>
          <Container maxWidth="lg">
              <Typography variant="h4" textAlign="center" fontWeight="bold" color={PRIMARY_COLOR} gutterBottom>
                  Digitizing Every Step of the Property Journey
              </Typography>
              <Typography textAlign="center" sx={{ color: TEXT_COLOR, mb: 4, maxWidth: 900, mx: 'auto', fontSize: "1.1rem" }}>
                  The real estate industry is no longer just about property — it’s about "data, experience, and speed". Buyers expect transparency, agents need automation, and developers demand real-time insights.
              </Typography>
              <Typography textAlign="center" sx={{ color: '#343A40', maxWidth: 900, mx: 'auto' }}>
                  From listing to closing, we build technology that simplifies and accelerates real estate operations. Whether you’re a real estate developer, property management firm, or brokerage, our team designs customized digital solutions that enhance visibility, automate routine processes, and create meaningful customer interactions.
              </Typography>
          </Container>
      </Grid>
      
      <Divider sx={{ my: 4, borderColor: PRIMARY_COLOR }} />

      {/* 3. CORE SOLUTIONS - Staggered Two-Column Card Layout */}
      <Grid item sx={{ py: 10 }}>
        <Container maxWidth="lg">
            <Typography variant="h4" textAlign="center" fontWeight="bold" mb={8} color={PRIMARY_COLOR}>
              Our Core Solutions
            </Typography>
            
            <Grid container spacing={6} alignItems="flex-start" justifyContent="center">
                {solutions.map((s, i) => (
                    <Grow in={true} timeout={800 + (i * 200)} key={i}>
                        <Grid 
                            item 
                            xs={12} 
                            sm={6}
                            // Stagger the cards left and right
                            sx={{ 
                                // Push odd-indexed cards right for staggered look
                                transform: { md: i % 2 !== 0 ? 'translateY(50px)' : 'translateY(0)' }, 
                                transition: 'transform 0.5s',
                                mt: { xs: 0, md: 0 }
                            }}
                        >
                            <Card 
                                sx={{ 
                                    p: 4, 
                                    minHeight: 220,
                                    bgcolor: ACCENT_COLOR, 
                                    color: TEXT_COLOR,
                                    boxShadow: 4, 
                                    borderRadius: 3,
                                    borderTop: `6px solid ${PRIMARY_COLOR}`, // Purple top border
                                    transition: "0.3s",
                                    "&:hover": { 
                                        boxShadow: 10,
                                        transform: 'translateY(-8px)', 
                                    },
                                }}
                            >
                                <Stack spacing={1}>
                                    <Grid sx={{ p: 1, display: 'inline-block', color: PRIMARY_COLOR }}>
                                        {s.icon} 
                                    </Grid>
                                    <Typography variant="h6" fontWeight="bold" color={PRIMARY_COLOR} sx={{ mt: 1 }}>
                                        {s.title}
                                    </Typography>
                                    <Typography variant="body2" color="gray">
                                        {s.description}
                                    </Typography>
                                </Stack>
                            </Card>
                        </Grid>
                    </Grow>
                ))}
            </Grid>
        </Container>
      </Grid>
      
      {/* 4. VALUE WE DELIVER - Highlighted Feature Blocks */}
      <Grid item sx={{ py: 10, bgcolor: PRIMARY_COLOR }}>
        <Container maxWidth="lg"> 
            <Typography variant="h4" textAlign="center" fontWeight="bold" mb={6} color={ACCENT_COLOR}>
                Value We Deliver
            </Typography>
            
            <Grid container spacing={4} justifyContent="center">
                {values.map((v, i) => (
                    <Slide direction="up" in={true} timeout={1000 + (i * 100)} key={i}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                elevation={0}
                                sx={{
                                    p: 3,
                                    bgcolor: ACCENT_COLOR, 
                                    borderLeft: `5px solid ${SECONDARY_COLOR}`, 
                                    borderRadius: 1,
                                    height: '100%',
                                    boxShadow: 3
                                }}
                            >
                                <Stack direction="row" spacing={2} alignItems="center">
                                    {v.icon && React.cloneElement(v.icon, { sx: { color: SECONDARY_COLOR, fontSize: 30 } })}
                                    <Typography variant="body1" color={TEXT_COLOR} fontWeight="medium">
                                        {v.label}
                                    </Typography>
                                </Stack>
                            </Card>
                        </Grid>
                    </Slide>
                ))}
            </Grid>
        </Container>
      </Grid>
      
      {/* 5. FOOTER CTA - Simple, Clear Call to Action */}
      <Grid
        item
        sx={{
          py: 8,
          textAlign: "center",
          bgcolor: SECONDARY_COLOR, // Dark Grey/Black background
          color: ACCENT_COLOR,
        }}
      >
        <Container>
          <Typography variant="h4" fontWeight="bold" mb={3} color={ACCENT_COLOR}>
            Building the Future of Real Estate
          </Typography>
          <Typography sx={{ maxWidth: 800, mx: "auto", mb: 4 }} color="grey.400">
            We combine technology, creativity, and domain expertise to help real estate businesses thrive in a competitive market. Let’s redefine real estate through innovation.
          </Typography>
          <Button
            size="large"
            endIcon={<ArrowForward />}
            sx={{
              bgcolor: PRIMARY_COLOR, // Purple button
              color: ACCENT_COLOR,
              fontWeight: "bold",
              px: 5,
              py: 1.5,
              borderRadius: 5,
              "&:hover": { bgcolor: "rgb(80, 20, 108)", transform: 'scale(1.05)' },
              transition: 'transform 0.3s',
            }}
          >
            Partner with us
          </Button>
        </Container>
      </Grid>

      <Divider sx={{ borderColor: PRIMARY_COLOR }} />
      <Copyrights/>
    </Grid>
  );
};

export default RealEstateLandingPageNoYellow;