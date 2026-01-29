"use client"
import React from "react";
import {
  Code,
  Security,
  Cloud,
  TrendingUp,
  AccountBalance,
  DataUsage,
  LocalAtm,
  Handshake,
  Gavel,
  Layers,
  BarChart,
  CheckCircle,
  GpsFixed, // Icon for targeting/goals
  RocketLaunch,
  Height, // Added RocketLaunch icon
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Divider,
  Grid,
  Grow,
  Fade,
  Slide,
} from "@mui/material";
import Copyrights from "@/app/component/copyright/page";

const FinancialServicesLandingPage: React.FC = () => {
  // --- Define the Core Color ---
  const PRIMARY_COLOR = "rgb(116,40,148)"; 
  const LIGHT_PURPLE = "rgba(116,40,148, 0.05)"; 
  const ACCENT_COLOR = "rgb(255, 255, 255)"; 
  const TEXT_COLOR = "rgb(0, 0, 0)"; 

  // ---------------------------------------------------------------------
  // --- UPDATED CONTENT BASED ON USER INPUT ---
  // ---------------------------------------------------------------------

  // Content for the "Core Capabilities" section (mapped to 'solutions')
  const solutions = [
    {
      icon: <Layers sx={{ fontSize: 40, color: PRIMARY_COLOR }} />,
      title: "Digital Banking Platforms",
      description: "We design scalable, intuitive banking applications that offer seamless account management, digital onboarding, and real-time transactions across mobile and web platforms.",
    },
    {
      icon: <LocalAtm sx={{ fontSize: 40, color: PRIMARY_COLOR }} />,
      title: "Fintech Application Development",
      description: "Custom-built fintech products such as payment gateways, digital wallets, investment apps, and lending platforms — optimized for speed, compliance, and user experience.",
    },
    {
      icon: <Gavel sx={{ fontSize: 40, color: PRIMARY_COLOR }} />,
      title: "Blockchain & Smart Contracts",
      description: "Implement secure, transparent systems for payments, asset management, and identity verification using distributed ledger technology.",
    },
    {
      icon: <DataUsage sx={{ fontSize: 40, color: PRIMARY_COLOR }} />,
      title: "AI-Powered Financial Analytics",
      description: "Leverage AI/ML to enhance fraud detection, credit scoring, and predictive analytics for smarter decision-making.",
    },
  ];

  // Content for the "How We Add Value" section (mapped to 'impacts')
  const impacts = [
    { value: "Agile Cloud", label: "Transform legacy banking systems into agile, cloud-based digital ecosystems.", icon: <Cloud /> },
    { value: "AI Trust", label: "Improve fraud prevention and customer trust through AI and automation.", icon: <Security /> },
    { value: "Real-time", label: "Enable real-time data insights for faster investment and lending decisions.", icon: <TrendingUp /> },
    { value: "Accelerate", label: "Build secure, scalable fintech applications that accelerate market entry.", icon: <RocketLaunch /> },
  ];

  // Placeholder content for the "Challenges" section (since no new list was provided, using old one)
  const challenges = [
    "Open Banking & Regulatory Pressure",
    "Legacy System Modernization",
    "Advanced Fraud & Risk Detection",
    "Customer Experience & Personalization",
    "Data Silos & Predictive Analytics",
  ];

  // Placeholder content for the "Why Choose Us" section (using old titles for structure)
  const whyChoose = [
    {
      title: "Domain Expertise",
      description: "Proven experience with global banks and fintechs.",
    },
    {
      title: "Security Focus",
      description: "Solutions built to meet high security standards (PSD2, GDPR).",
    },
    {
      title: "Agile Architecture",
      description: "Scalable, resilient microservices on cloud platforms.",
    },
    {
      title: "Full-Cycle Partner",
      description: "From strategy to deployment and maintenance.",
    },
  ];

  // ---------------------------------------------------------------------
  // --- COMPONENT STRUCTURE ---
  // ---------------------------------------------------------------------

  return (
    <Grid sx={{ bgcolor: ACCENT_COLOR, color: TEXT_COLOR, minHeight: "100vh" }}>

      {/* 1. HERO SECTION - Updated Text */}
      <Grid
        sx={{
          py: { xs: 8, md: 15 }, 
          background: `linear-gradient(135deg, ${PRIMARY_COLOR}, rgb(76,20,108))`,
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            
            <Grid item xs={12} md={7}>
              <Slide direction="right" in={true} timeout={800}>
                <Grid>
                  <Typography sx={{color: ACCENT_COLOR, fontSize: { xs: 'h4.fontSize', md: 'h3.fontSize' }}} fontWeight="bold" gutterBottom>
                    Financial Services Software Development Solutions
                  </Typography>
                  <Typography variant="h5" sx={{ color: "rgb(200,150,220)", mb: 3 }}>
                    Enabling the Future of Digital Finance
                  </Typography>
                  <Typography sx={{ color: "rgba(226, 203, 235, 1)", mb: 5 }} fontSize="1.1rem">
                    The financial services industry is undergoing massive disruption. Our software development expertise helps banks, fintechs, and financial institutions deliver secure, intelligent, and customer-first digital experiences that drive trust and growth.
                  </Typography>
                  <Button
                    size="large"
                    sx={{
                      bgcolor: ACCENT_COLOR,
                      color: PRIMARY_COLOR,
                      fontWeight: "bold",
                      px: 5,
                      py: 1.5,
                      "&:hover": { bgcolor: "rgb(240,240,240)", transform: 'scale(1.05)' },
                      transition: 'transform 0.3s',
                    }}
                  >
                    Schedule a Consultation
                  </Button>
                </Grid>
              </Slide>
            </Grid>

            {/* Right Column: Placeholder/Visual Element (Hidden on small screens) */}
            <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Fade in={true} timeout={1800}>
                <Grid sx={{ 
                    height: 300, 
                    bgcolor: 'rgba(255, 255, 255, 0.15)', 
                    borderRadius: 3,
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 4,
                }}>
                    <Typography color="white" variant="h6">
                        Reimagining Finance with Technology
                    </Typography>
                </Grid>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      {/* 2. CORE CAPABILITIES (Solutions) - Minimalist Grid with Hover Effects */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={2} color={TEXT_COLOR}>
          Our Core Capabilities
        </Typography>
        <Typography textAlign="center" sx={{ color: "gray", mb: 8, fontSize: "1.1rem" }}>
          We help our clients modernize core systems, leverage cloud technology, and harness data to create financial ecosystems that are faster, safer, and more customer-centric.
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
            {solutions.map((s, i) => (
                <Grow in={true} timeout={800 + (i * 200)} key={i}>
                    <Grid item xs={12} sm={6} md={3}> {/* Adjusted to md=3 for 4 items per row */}
                        <Card 
                            sx={{ 
                                p: 3, 
                                height: '100%',
                                boxShadow: 1, 
                                borderRadius: 2,
                                borderBottom: `4px solid transparent`,
                                transition: "0.3s",
                                "&:hover": { 
                                    boxShadow: 6,
                                    borderBottom: `4px solid ${PRIMARY_COLOR}`,
                                    transform: 'translateY(-5px)', 
                                    cursor: 'pointer',
                                    bgcolor: LIGHT_PURPLE,
                                },
                            }}
                        >
                            <Stack spacing={2}  >
                                {s.icon}
                                <Typography color={TEXT_COLOR} variant="h6" fontWeight="bold">
                                    {s.title}
                                </Typography>
                                <Typography color="gray" variant="body2" fontSize={15}>
                                    {s.description}
                                </Typography>
                            </Stack>
                        </Card>
                    </Grid>
                </Grow>
            ))}
        </Grid>
      </Container>
      
      {/* 3. HOW WE ADD VALUE (Impacts) - Minimalist, Separated Scorecard with detailed text */}
      <Grid sx={{ py: 10, bgcolor: LIGHT_PURPLE }}>
        <Container maxWidth="lg"> 
            <Typography variant="h4" textAlign="center" fontWeight="bold" mb={8} color={TEXT_COLOR}>
                How We Add Value
            </Typography>
            
            <Grid container spacing={{ xs: 3, md: 5 }} justifyContent="center">
                {impacts.map((impact, i) => (
                    <Slide direction="up" in={true} timeout={1000 + (i * 200)} key={i}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Stack 
                                sx={{
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    p: 2,
                                }}
                            >
                                {impact.icon && React.cloneElement(impact.icon, { sx: { color: PRIMARY_COLOR, fontSize: 48, mb: 1 } })}
                                <Typography variant="h5" fontWeight="bold" color={PRIMARY_COLOR}>
                                    {impact.value}
                                </Typography>
                                <Typography variant="body2" color={TEXT_COLOR}>
                                    {impact.label}
                                </Typography>
                            </Stack>
                        </Grid>
                    </Slide>
                ))}
            </Grid>
        </Container>
      </Grid>
      
      {/* 4. CHALLENGES & WHY CHOOSE US - (Re-using the last approved layout structure) */}
     <Container sx={{ py: 10 }}>
    <Typography variant="h3" textAlign="center" fontWeight="bold" mb={2} color={PRIMARY_COLOR}>
        The Partnership Dialogue
    </Typography>
    <Typography textAlign="center" sx={{ color: "gray", mb: 8, fontSize: "1.1rem" }}>
        Addressing your toughest challenges with our clearest advantages.
    </Typography>

    {/* The main Grid container with spacing and stretch alignment */}
    <Grid container spacing={5} alignItems="stretch">
        
        {/* LEFT PANEL: Challenges - Vertical Stack with Border */}
        <Grid item xs={12} md={6}>
            <Grid 
                sx={{ 
                    height: '100%', 
                    p: 4, 
                    bgcolor: LIGHT_PURPLE, // Light background to define the area
                    borderRadius: 2,
                }}
            >
                <Fade in={true} timeout={1000}>
                    <Stack direction="row" alignItems="center" spacing={1} mb={4}>
                        {/* Assuming GpsFixed is available, otherwise use Target or similar */}
                        <GpsFixed sx={{ fontSize: 32, color: PRIMARY_COLOR }} /> 
                        <Typography variant="h4" fontWeight="bold" color={TEXT_COLOR}>
                            The Digital Hurdles We Clear
                        </Typography>
                    </Stack>
                </Fade>
                <Stack spacing={3}>
                    {challenges.map((item, i) => (
                        <Slide direction="left" in={true} timeout={1200 + (i * 150)} key={i}>
                            {/* Individual challenge item */}
                            <Stack direction="row" spacing={2} alignItems="flex-start" 
                                sx={{ 
                                    borderLeft: `4px solid ${PRIMARY_COLOR}`, 
                                    pl: 2, 
                                    py: 0.5,
                                    // Subtle hover effect
                                    transition: '0.2s',
                                    '&:hover': { bgcolor: 'rgba(255,255,255,0.7)', cursor: 'pointer' }
                                }}
                            >
                                <BarChart sx={{ color: PRIMARY_COLOR, fontSize: 20, mt: '2px' }} />
                                <Typography color={TEXT_COLOR} variant="body1">{item}</Typography>
                            </Stack>
                        </Slide>
                    ))}
                </Stack>
            </Grid>
        </Grid>

        {/* RIGHT PANEL: Why Choose Us - Stacked Cards with Full Height */}
        <Grid item xs={12} md={6}>
            <Grid 
                sx={{ 
                    height: '100%', 
                    p: 4, 
                    bgcolor: ACCENT_COLOR, // White background
                    borderRadius: 2,
                    boxShadow: 3, // Add a slight shadow to make it distinct
                }}
            >
                <Fade in={true} timeout={1000}>
                    <Stack direction="row" alignItems="center" spacing={1} mb={4}>
                        <Handshake sx={{ fontSize: 32, color: PRIMARY_COLOR }} />
                        <Typography variant="h4" fontWeight="bold" color={TEXT_COLOR}>
                            Our Partnership Advantage
                        </Typography>
                    </Stack>
                </Fade>
                
                {/* Stack of Cards for Why Choose Us */}
                <Stack spacing={3}>
                    {whyChoose.map((w, i) => (
                        <Grow in={true} timeout={1200 + (i * 200)} key={i}>
                            <Card 
                                sx={{ 
                                    p: 2, 
                                    boxShadow: 1,
                                    borderRadius: 1,
                                    borderLeft: `5px solid ${LIGHT_PURPLE}`,
                                    transition: '0.3s',
                                    "&:hover": { 
                                        boxShadow: 3,
                                        borderLeft: `5px solid ${PRIMARY_COLOR}`,
                                        transform: 'translateX(3px)',
                                        cursor: 'pointer'
                                    },
                                }}
                            >
                                <Stack spacing={0.5}>
                                    <Typography variant="h6" fontWeight="bold" color={PRIMARY_COLOR}>
                                        {w.title}
                                    </Typography>
                                    <Typography color="gray" variant="body2">
                                        {w.description}
                                    </Typography>
                                </Stack>
                            </Card>
                        </Grow>
                    ))}
                </Stack>
            </Grid>
        </Grid>
    </Grid>
</Container>

      {/* 5. FOOTER CTA - Updated Text */}
      <Grid
        sx={{
          py: 10,
          textAlign: "center",
          background: `linear-gradient(to top left, black, ${PRIMARY_COLOR})`,
          color: ACCENT_COLOR,
        }}
      >
        <Container>
          <Typography variant="h4" fontWeight="bold" mb={3}>
            Your Technology Partner in Finance
          </Typography>
          <Typography sx={{ maxWidth: 700, mx: "auto", mb: 4 }} color="grey.200">
            From core banking modernization to next-generation fintech innovation, we partner with financial enterprises to architect robust, compliant, and intelligent software ecosystems.
          </Typography>
          <Button
            size="large"
            sx={{
              bgcolor: ACCENT_COLOR,
              color: PRIMARY_COLOR,
              fontWeight: "bold",
              px: 5,
              py: 1.5,
              "&:hover": { bgcolor: "rgb(240,240,240)", transform: 'scale(1.05)' },
              transition: 'transform 0.3s',
            }}
          >
            Let’s shape the future of financial technology — together.
          </Button>
        </Container>
      </Grid>

      <Divider sx={{ borderColor: PRIMARY_COLOR }} />
      <Copyrights/>
    </Grid>
  );
};

export default FinancialServicesLandingPage;