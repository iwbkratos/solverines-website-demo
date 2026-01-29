import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Paper,
  Avatar,
  Fade,
  Slide,
  Zoom,
  Grow
} from '@mui/material';
import {
  TrendingUp,
  Lightbulb,
  Security,
  CheckCircle,
  FlashOn,
  People,
  EmojiEvents,
  TrackChanges,
  CloudDone,
  Assessment,
  AccountTree,
  VerifiedUser,
  AutoAwesome
} from '@mui/icons-material';
import Link from 'next/link';
import Copyrights from '@/app/component/copyright/page';

const ITConsultingPage = () => {
  const services = [
    {
      icon: <TrackChanges sx={{ fontSize: 40 }} />,
      title: 'Technology Strategy & Planning',
      description: 'Assess current IT infrastructure and define a roadmap for technology adoption. Recommend solutions, platforms, and best practices that align with organizational goals.'
    },
    {
      icon: <AutoAwesome sx={{ fontSize: 40 }} />,
      title: 'Digital Transformation Advisory',
      description: 'Guide organizations through digital transformation initiatives. Identify opportunities for automation, cloud adoption, platform modernization, and process optimization.'
    },
    {
      icon: <AccountTree sx={{ fontSize: 40 }} />,
      title: 'Platform & Application Consulting',
      description: 'Provide expert advice on selecting, implementing, and optimizing platforms like OutSystems. Ensure applications are scalable, secure, and aligned with business processes.'
    },
    // {
    //   icon: <VerifiedUser sx={{ fontSize: 40 }} />,
    //   title: 'IT Governance & Risk Management',
    //   description: 'Establish governance frameworks and risk management strategies to ensure compliance, security, and operational resilience across IT systems and platforms.'
    // },
    {
      icon: <Assessment sx={{ fontSize: 40 }} />,
      title: 'Process Optimization & Innovation',
      description: 'Analyze workflows and processes to identify inefficiencies. Recommend solutions, technology enhancements, and automation opportunities to improve productivity and outcomes.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp sx={{ fontSize: 32 }} />,
      title: 'Strategic Alignment',
      description: 'Align technology initiatives with business objectives to maximize ROI and drive sustainable growth.'
    },
    {
      icon: <FlashOn sx={{ fontSize: 32 }} />,
      title: 'Accelerated Innovation',
      description: 'Leverage expert guidance to fast-track digital transformation and stay ahead of market trends.'
    },
    {
      icon: <Security sx={{ fontSize: 32 }} />,
      title: 'Risk Mitigation',
      description: 'Ensure compliance, security, and operational resilience with proven governance frameworks.'
    },
    {
      icon: <Lightbulb sx={{ fontSize: 32 }} />,
      title: 'Expert Insights',
      description: 'Benefit from industry best practices and actionable strategies tailored to your organization.'
    }
  ];

  const whyTrust = [
    {
      icon: <EmojiEvents sx={{ fontSize: 28 }} />,
      title: 'Deep Expertise',
      description: 'Our consultants bring decades of combined experience across industries, technologies, and business domains.'
    },
    {
      icon: <People sx={{ fontSize: 28 }} />,
      title: 'Client-Centric Approach',
      description: 'We prioritize understanding your unique challenges and tailor solutions that fit your specific needs and goals.'
    },
    {
      icon: <CheckCircle sx={{ fontSize: 28 }} />,
      title: 'Proven Methodologies',
      description: 'Our consulting framework is built on industry best practices and refined through hundreds of successful engagements.'
    },
    {
      icon: <CloudDone sx={{ fontSize: 28 }} />,
      title: 'End-to-End Support',
      description: 'From strategy to implementation and beyond, we partner with you throughout your technology journey.'
    }
  ];

  return (
    <>
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', paddingBottom: '4rem' }}>
      <Grid container sx={{ background: 'linear-gradient(135deg, rgb(116,40,148) 0%, rgb(85,30,110) 100%)', color: 'white', paddingTop: 8, paddingBottom:'2%'}}>
        <Container maxWidth="lg" >
          <Fade in={true} timeout={1000}>
            <Grid container spacing={2} alignItems="center" >
              <Grid item xs={12} md={8} >
                <Slide direction="right" in={true} timeout={800}>
                  <Typography 
                    variant="h2" 
                    component="h1"
                    sx={{ 
                      color: "white", 
                      m: 0, 
                      mt:'6%',
                      fontWeight: 'bold',
                      fontSize: { xs: '2rem', md: '2rem' },
                    }}
                  >
                    IT Consulting
                  </Typography>
                </Slide>
                <Slide direction="right" in={true} timeout={1000}>
                  <Typography 
                    variant="h5"
                    sx={{ 
                      color: "white", 
                      margin: 0,
                      mt:1,
                      fontWeight: 700,
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      lineHeight: 1.5,
                    }}
                  >
                    Strategic Technology Guidance for Business Growth
                  </Typography>
                </Slide>
                <Slide direction="right" in={true} timeout={1200}>
                  <Typography 
                    sx={{ 
                      color: "white", 
                      mt: 0,
                      fontWeight: 700,
                      fontSize: { xs: '0.95rem', md: '1.1rem' },
                      opacity: 0.9,
                      fontStyle: 'italic',
                    }}
                  >
                    Expert, Insightful, and Outcome-Driven Solutions.
                  </Typography>
                </Slide>
              </Grid>
            </Grid>
          </Fade>
        </Container>
      </Grid>
      <Container maxWidth="lg" sx={{ m: 5}}>
        <Fade in={true} timeout={1000}>
          <Paper elevation={0} sx={{ p: 4, backgroundColor: '#ffffff', border: '1px solid #e0e0e0', }}>
            <Typography variant="body1" sx={{ lineHeight: 1.9, fontSize: '1.05rem', color: '#444' }}>
              IT consulting helps organizations align technology initiatives with business goals. By analyzing existing systems, processes, and workflows, IT consulting services provide actionable strategies, optimize technology investments, and support digital transformation. Whether planning new initiatives, modernizing infrastructure, or adopting new platforms, IT consulting ensures technology delivers measurable business value.
            </Typography>
          </Paper>
        </Fade>
      </Container>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Fade in={true} timeout={1200}>
          <Grid container spacing={2} sx={{ mb: 6 }}>
            <Grid item xs={12}>
              <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" textAlign="center" color="rgb(116,40,148)">
                Our Services
              </Typography>
              <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.1rem' }}>
                Comprehensive IT consulting services tailored to your business needs
              </Typography>
            </Grid>
          </Grid>
        </Fade>

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Zoom in={true} timeout={600 + idx * 200}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius:'12px',
                    height: '100%',
                    borderTop:'4px solid rgb(116,40,148)',
                    backgroundColor: '#ffffff',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(116,40,148,0.15)',
                      borderColor: 'rgb(116,40,148)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Avatar
                      sx={{
                        backgroundColor: 'rgba(116,40,148,0.1)',
                        color: 'rgb(116,40,148)',
                        width: 70,
                        height: 70,
                        mb: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'rotate(360deg)',
                          backgroundColor: 'rgb(116,40,148)',
                          color: 'white'
                        }
                      }}
                    >
                      {service.icon}
                    </Avatar>
                    <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" sx={{ color: '#1a1a1a' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666666', lineHeight: 1.8 }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Grid container sx={{ backgroundColor: '#ffffff', py: 8, mt: 5 }}>
        <Container maxWidth="lg">
          <Fade in={true} timeout={1000}>
            <Grid container spacing={2} sx={{ mb: 6 }}>
              <Grid item xs={12}>
                <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" textAlign="center" color="rgb(116,40,148)">
                  Why Choose Our Consulting Services?
                </Typography>
                <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.1rem' }}>
                  Partner with experts who deliver measurable business outcomes
                </Typography>
              </Grid>
            </Grid>
          </Fade>

          <Grid container spacing={4}>
            {benefits.map((benefit, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Grow in={true} timeout={800 + idx * 200}>
                  <Grid container direction="column" alignItems="center" sx={{ textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        backgroundColor: 'rgb(116,40,148)',
                        width: 80,
                        height: 80,
                        mb: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.15)',
                          boxShadow: '0 8px 16px rgba(116,40,148,0.3)'
                        }
                      }}
                    >
                      {benefit.icon}
                    </Avatar>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {benefit.description}
                    </Typography>
                  </Grid>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Fade in={true} timeout={1000}>
          <Grid container spacing={2} sx={{ mb: 6 }}>
            <Grid item xs={12}>
              <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" textAlign="center" color="rgb(116,40,148)">
                Why Trust Us?
              </Typography>
              <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.1rem' }}>
                Experience the difference of working with seasoned IT consulting professionals
              </Typography>
            </Grid>
          </Grid>
        </Fade>

        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          {whyTrust.map((item, idx) => (
            <Grid item xs={12} md={6} key={idx} sx={{ display: 'flex' }}>
              <Slide direction={idx % 2 === 0 ? "right" : "left"} in={true} timeout={700 + idx * 150} style={{ width: '100%' }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    width: '100%',
                    backgroundColor: 'rgba(116,40,148,0.03)',
                    border: '1px solid rgba(116,40,148,0.1)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      backgroundColor: 'rgba(116,40,148,0.05)',
                      borderColor: 'rgb(116,40,148)',
                      transform: 'translateX(8px)'
                    }
                  }}
                >
                  <Grid container spacing={2} alignItems="flex-start" sx={{ flexWrap: 'nowrap' }}>
                    <Grid item sx={{ flexShrink: 0 }}>
                      <Avatar
                        sx={{
                          backgroundColor: 'rgb(116,40,148)',
                          width: 56,
                          height: 56,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'rotate(360deg)'
                          }
                        }}
                      >
                        {item.icon}
                      </Avatar>
                    </Grid>
                    <Grid item xs sx={{ minWidth: 0 }}>
                      <Typography variant="h6" gutterBottom fontWeight="bold">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {item.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
        <Fade in={true} timeout={1000}>
          <Paper elevation={0} sx={{ p: 4, backgroundColor: '#ffffff', border: '1px solid #e0e0e0', }}>
            <Typography variant="body1" sx={{ lineHeight: 1.9, fontSize: '1.05rem', color: '#444' }}>
              IT consulting services help organizations maximize the value of technology investments. From strategy and platform guidance to risk management and process optimization, IT consulting enables efficient, secure, and innovative operations that support long-term business growth.
            </Typography>
          </Paper>
        </Fade>
      </Container>
      <Grid container sx={{ mt: 8 }}>
        <Container maxWidth="lg">
          <Zoom in={true} timeout={1000}>
            <Paper
              elevation={0}
              sx={{
                background: 'linear-gradient(135deg, rgb(116,40,148) 0%, rgb(85,30,110) 100%)',
                color: 'white',
                p: 6,
                borderRadius: 2,
                textAlign: 'center'
              }}
            >
              <Typography variant="h4" gutterBottom fontWeight="bold">
                Ready to Transform Your IT Strategy?
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, fontSize: '1.1rem' }}>
                Let's discuss how our IT consulting services can drive your business forward
              </Typography>
              <Button component={Link} href="/contact"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: 'rgb(116,40,148)',
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                    transform: 'scale(1.05)'
                  },
                  px: 5,
                  py: 1.5,
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease'
                }}
              >
                Contact Us Today
              </Button>
            </Paper>
          </Zoom>
        </Container>
      </Grid>
    </div>
    <Copyrights/>
    </>
  );
};

export default ITConsultingPage;