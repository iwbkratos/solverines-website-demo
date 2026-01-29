"use client"
import React from "react";
import {
  LocalHospital,
  Dvr, // EHR
  VideoCall, // Telemedicine
  Lightbulb, // Diagnostics/AI
  Event, // Scheduling/Management
  FormatListNumbered, // Admin reduction
  PeopleAlt, // Patient experience
  Science, // Clinical accuracy
  VerifiedUser, // Compliance
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

const HealthcareLandingPageSplit: React.FC = () => {
  // --- Define the Core Color (Financial Services Theme: Deep Purple) ---
  const PRIMARY_COLOR = "rgb(116, 40, 148)"; // Deep Purple
  const SECONDARY_COLOR = "rgb(255, 180, 0)"; // Contrasting Gold/Orange
  const LIGHT_ACCENT = "rgba(116, 40, 148, 0.08)"; // Light Purple Tint
  const ACCENT_COLOR = "rgb(255, 255, 255)"; // White
  const TEXT_COLOR = "rgb(30, 30, 30)"; // Near Black

  // ---------------------------------------------------------------------
  // --- DATA MAPPING (Using only the provided data) ---
  // ---------------------------------------------------------------------

  const solutions = [
    {
      icon: <Dvr sx={{ fontSize: 35, color: PRIMARY_COLOR }} />,
      title: "1. Electronic Health Record (EHR) Systems",
      description: "Develop integrated EHR platforms that ensure accurate, secure, and accessible patient information across departments and facilities.",
    },
    {
      icon: <VideoCall sx={{ fontSize: 35, color: PRIMARY_COLOR }} />,
      title: "2. Telemedicine & Remote Care Platforms",
      description: "Enable virtual consultations, secure communication, and remote monitoring to expand care beyond hospital walls.",
    },
    {
      icon: <Lightbulb sx={{ fontSize: 35, color: PRIMARY_COLOR }} />,
      title: "3. AI-Powered Diagnostics & Analytics",
      description: "Use predictive analytics and AI to assist doctors with early diagnosis, treatment recommendations, and risk analysis.",
    },
    {
      icon: <Event sx={{ fontSize: 35, color: PRIMARY_COLOR }} />,
      title: "4. Hospital Management Systems",
      description: "Digitize scheduling, billing, staff management, and resource allocation for greater operational control.",
    },
  ];

  const impacts = [
    { label: "Reduced administrative workload through process automation.", icon: <FormatListNumbered /> },
    { label: "Improved patient experience with personalized care and real-time engagement.", icon: <PeopleAlt /> },
    { label: "Greater clinical accuracy and efficiency through data-driven decision-making.", icon: <Science /> },
    { label: "Stronger compliance and data integrity across all digital systems.", icon: <VerifiedUser /> },
  ];

  // ---------------------------------------------------------------------

  return (
    <Grid container direction="column" sx={{ bgcolor: ACCENT_COLOR, color: TEXT_COLOR, minHeight: "100vh" }}>

      {/* 1. HERO SECTION - High-Impact Header Banner (Full Width) */}
      <Grid
        item
        sx={{
          py: { xs: 8, md: 10 },
          // Using a diagonal split color theme
          background: `linear-gradient(120deg, ${PRIMARY_COLOR} 60%, ${SECONDARY_COLOR} 100%)`,
          overflow: 'hidden',
          color: ACCENT_COLOR,
        }}
      >
        <Container maxWidth="lg">
          <Slide direction="right" in={true} timeout={800}>
            <Grid container alignItems="center" spacing={4}>
              {/* Left Column: Title and CTA */}
              <Grid item xs={12} md={7}>
                <Typography variant="h2" fontWeight="bold" sx={{ color: ACCENT_COLOR, maxWidth: 800 }} gutterBottom>
                    Healthcare Industry Software Development Solutions
                </Typography>
                <Typography variant="h5" sx={{ color: SECONDARY_COLOR, mb: 3, maxWidth: 900 }}>
                    Building a Smarter, Healthier Future with Technology
                </Typography>
                <Typography sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 4 }}>
                    Our healthcare software development services help organizations deliver better outcomes, enhance patient engagement, and achieve compliance through secure, data-driven solutions.
                </Typography>
                <Button
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                        bgcolor: ACCENT_COLOR,
                        color: PRIMARY_COLOR,
                        fontWeight: "bold",
                        px: 5,
                        py: 1.5,
                        borderRadius: 5,
                        "&:hover": { bgcolor: "rgb(240,240,240)", transform: 'scale(1.05)' },
                        transition: 'transform 0.3s',
                    }}
                >
                    Discuss Your Digital Strategy
                </Button>
              </Grid>
              {/* Right Column: Key Visual */}
              <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                <LocalHospital sx={{ fontSize: 150, color: 'rgba(255, 255, 255, 0.3)' }}/>
              </Grid>
            </Grid>
          </Slide>
        </Container>
      </Grid>

      {/* 2. VALUE PROPOSITION & INTRODUCTION - Alternating Text/Visual Block */}
      <Grid item sx={{ py: 10 }}>
          <Container maxWidth="lg">
              <Grid container spacing={6} alignItems="center">
                  {/* Left Column: Text (Innovation) */}
                  <Grid item xs={12} md={6}>
                      <Fade in={true} timeout={1500}>
                          <Grid sx={{ p: 3, border: `1px solid ${LIGHT_ACCENT}`, borderRadius: 2 }}>
                              <Typography variant="h4" fontWeight="bold" color={PRIMARY_COLOR} gutterBottom>
                                  Transforming Patient Care Through Innovation
                              </Typography>
                              <Divider sx={{ mb: 2, borderColor: SECONDARY_COLOR, width: 50 }} />
                              <Typography variant="body1" sx={{ color: TEXT_COLOR, mb: 2 }}>
                                  Healthcare organizations today are reimagining patient care through digital transformation. From telemedicine to AI-assisted diagnostics, technology is reshaping how hospitals, clinics, and providers operate.
                              </Typography>
                              <Typography variant="body1" sx={{ color: 'gray' }}>
                                  We combine healthcare domain expertise with advanced technologies like **cloud computing, IoT, and AI** to design systems that are **scalable, secure, and efficient.**
                              </Typography>
                          </Grid>
                      </Fade>
                  </Grid>

                  {/* Right Column: Text (Precision) */}
                  <Grid item xs={12} md={6}>
                      <Fade in={true} timeout={1800}>
                          <Grid sx={{ p: 3, bgcolor: LIGHT_ACCENT, borderRadius: 2 }}>
                              <Typography variant="h4" fontWeight="bold" color={PRIMARY_COLOR} gutterBottom>
                                  Clarity and Precision in Every Level of Care
                              </Typography>
                              <Divider sx={{ mb: 2, borderColor: PRIMARY_COLOR, width: 50 }} />
                              <Typography variant="body1" sx={{ color: TEXT_COLOR, mb: 2 }}>
                                  Our solutions bring clarity and precision to every level of care.
                              </Typography>
                              <Typography variant="body1" sx={{ color: 'gray' }}>
                                  Whether it’s improving clinical workflows or enhancing interoperability across hospital systems, our goal is to deliver better outcomes, enhance patient engagement, and achieve compliance.
                              </Typography>
                          </Grid>
                      </Fade>
                  </Grid>
              </Grid>
          </Container>
      </Grid>
      
      {/* 3. KEY SOLUTIONS - Side-by-Side Cards (Two Columns) */}
      <Grid item sx={{ py: 10, bgcolor: LIGHT_ACCENT }}>
        <Container maxWidth="lg">
            <Typography variant="h4" textAlign="center" fontWeight="bold" mb={2} color={PRIMARY_COLOR}>
              Our Key Solutions
            </Typography>
            <Typography textAlign="center" sx={{ color: "gray", mb: 8, fontSize: "1.1rem" }}>
              Tailored software systems to drive operational and clinical excellence.
            </Typography>
            
            <Grid container spacing={4} justifyContent="center">
                {solutions.map((s, i) => (
                    <Grow in={true} timeout={800 + (i * 200)} key={i}>
                        <Grid item xs={12} sm={6}>
                            <Card 
                                sx={{ 
                                    p: 3, 
                                    height: '100%',
                                    boxShadow: 2, 
                                    borderRadius: 2,
                                    borderLeft: `6px solid ${PRIMARY_COLOR}`, // Strong visual cue
                                    transition: "0.3s",
                                    "&:hover": { 
                                        boxShadow: 8,
                                        transform: 'translateY(-3px)', 
                                        bgcolor: ACCENT_COLOR, 
                                        cursor: 'pointer'
                                    },
                                }}
                            >
                                <Stack direction="row" spacing={2} alignItems="flex-start">
                                    {/* Icon area */}
                                    <Grid sx={{ pt: 1, color: PRIMARY_COLOR }}>
                                        {s.icon}
                                    </Grid>
                                    {/* Text area */}
                                    <Stack spacing={0.5}>
                                        <Typography variant="h6" fontWeight="bold" color={TEXT_COLOR}>
                                            {s.title}
                                        </Typography>
                                        <Typography variant="body2" color="gray">
                                            {s.description}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Card>
                        </Grid>
                    </Grow>
                ))}
            </Grid>
        </Container>
      </Grid>
      
      {/* 4. IMPACT WE CREATE - Vertical List with Orange/Gold Divider */}
      <Grid item sx={{ py: 10 }}>
        <Container maxWidth="md"> 
            <Typography variant="h4" textAlign="center" fontWeight="bold" mb={8} color={PRIMARY_COLOR}>
                Impact We Create
            </Typography>
            
            <Stack spacing={3} divider={<Divider sx={{ borderColor: SECONDARY_COLOR, opacity: 0.5 }} />}>
                {impacts.map((impact, i) => (
                    <Slide direction="right" in={true} timeout={1000 + (i * 200)} key={i}>
                        <Grid container spacing={2} alignItems="flex-start">
                            <Grid item xs={1}>
                                {impact.icon && React.cloneElement(impact.icon, { sx: { color: SECONDARY_COLOR, fontSize: 35 } })}
                            </Grid>
                            <Grid item xs={11}>
                                <Typography variant="body1" color={TEXT_COLOR} fontWeight="medium">
                                    {impact.label}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Slide>
                ))}
            </Stack>
        </Container>
      </Grid>
      
      {/* 5. FOOTER CTA - Reverse Color Block with Final Statement */}
      <Grid
        item
        sx={{
          py: 8,
          textAlign: "center",
          bgcolor: TEXT_COLOR,
          color: ACCENT_COLOR,
        }}
      >
        <Container>
          <Typography variant="h4" fontWeight="bold" mb={3}>
            Empowering Healthcare Through Technology
          </Typography>
          <Typography sx={{ maxWidth: 800, mx: "auto", mb: 4 }} color="grey.400">
            We don’t just build software — we create digital ecosystems that help save lives, streamline operations, and empower caregivers.
          </Typography>
          <Button
            size="large"
            endIcon={<ArrowForward />}
            sx={{
              bgcolor: PRIMARY_COLOR, // Purple button on black background
              color: ACCENT_COLOR,
              fontWeight: "bold",
              px: 5,
              py: 1.5,
              borderRadius: 5,
              "&:hover": { bgcolor: "rgb(80, 20, 108)", transform: 'scale(1.05)' },
              transition: 'transform 0.3s',
            }}
          >
            Partner with us to deliver healthcare that’s connected, intelligent, and future-ready.
          </Button>
        </Container>
      </Grid>

      <Divider sx={{ borderColor: PRIMARY_COLOR }} />
      <Copyrights/>
    </Grid>
  );
};

export default HealthcareLandingPageSplit;