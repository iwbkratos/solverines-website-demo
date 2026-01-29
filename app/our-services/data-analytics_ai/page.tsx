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
  BarChart,
  Psychology,
  Security,
  CheckCircle,
  FlashOn,
  People,
  EmojiEvents,
  TrackChanges,
  Storage
} from '@mui/icons-material';
import Link from 'next/link';
import Copyrights from '@/app/component/copyright/page';
const DataAnalyticsAIPage = () => {
  const services = [
    {
      icon: <TrackChanges sx={{ fontSize: 40 }} />,
      title: 'Data Strategy & Planning',
      description: 'Define a roadmap for integrating analytics and AI capabilities with OutSystems applications. Identify key data sources, analytics requirements, and reporting needs to drive informed decisions.'
    },
    {
      icon: <BarChart sx={{ fontSize: 40 }} />,
      title: 'Analytics & Reporting',
      description: 'Build interactive dashboards and reports within OutSystems applications or through external tools like Power BI or Tableau. Track business metrics, app usage, and user behavior to improve efficiency.'
    },
    {
      icon: <Psychology sx={{ fontSize: 40 }} />,
      title: 'AI & Intelligent Automation Integrations',
      description: 'Develop a comprehensive roadmap for integrating analytics and AI capabilities. Assess critical data sources, define analytics objectives, and establish reporting frameworks to support informed, data-driven decision-making.'
    },
    {
      icon: <Storage sx={{ fontSize: 40 }} />,
      title: 'Data Management & Connectivity',
      description: 'Integrate and manage data from multiple sources, internal and external, ensuring accurate, secure, and accessible information for analytics and AI initiatives.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp sx={{ fontSize: 32 }} />,
      title: 'Actionable Insights',
      description: 'Transform raw data into meaningful insights that drive strategic business decisions and competitive advantage.'
    },
    {
      icon: <FlashOn sx={{ fontSize: 32 }} />,
      title: 'Accelerated Development',
      description: 'Leverage OutSystems low-code platform combined with AI to reduce development time by up to 10x.'
    },
    {
      icon: <Security sx={{ fontSize: 32 }} />,
      title: 'Enterprise-Grade Security',
      description: 'Ensure data privacy and compliance with built-in security features and governance frameworks.'
    },
    {
      icon: <Lightbulb sx={{ fontSize: 32 }} />,
      title: 'Intelligent Automation',
      description: 'Automate complex workflows with AI-powered decision-making and predictive analytics capabilities.'
    }
  ];

  const whyTrust = [
    {
      icon: <EmojiEvents sx={{ fontSize: 28 }} />,
      title: 'Certified Expertise',
      description: 'Our team holds OutSystems certifications and has extensive experience in data analytics and AI implementations.'
    },
    {
      icon: <People sx={{ fontSize: 28 }} />,
      title: 'Proven Track Record',
      description: 'Successfully delivered 100+ OutSystems projects with integrated analytics and AI solutions across industries.'
    },
    {
      icon: <CheckCircle sx={{ fontSize: 28 }} />,
      title: 'End-to-End Support',
      description: 'From strategy to implementation and ongoing optimization, we partner with you at every stage.'
    },
    {
      icon: <TrackChanges sx={{ fontSize: 28 }} />,
      title: 'Business-Focused Approach',
      description: 'We align technical solutions with your business objectives to deliver measurable ROI and value.'
    }
  ];

  return (
    <>
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', paddingBottom: '3rem' }}>
      <Grid container sx={{ background: 'linear-gradient(135deg, rgb(116,40,148) 0%, rgb(85,30,110) 100%)', color: 'white', paddingTop: 8, paddingBottom:5 }}>
        <Container maxWidth="lg">
          <Fade in={true} timeout={1000}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={8} sx={{width : '45%',marginTop:'5%'}}>
                <Slide direction="right" in={true} timeout={800}>
                  <Typography 
                    variant="h2" 
                    component="h1"
                    sx={{ 
                      color: "white", 
                      fontWeight: 'bold',
                      fontSize: { xs: '1.8rem', md: '1.8rem' }
                    }}
                  >
                    Data Analytics & AI
                  </Typography>
                </Slide>
                <Slide direction="right" in={true} timeout={1000}>
                  <Typography 
                    variant="h5"
                    sx={{ 
                      color: "white", 
                      mt: 0,
                      fontWeight: 500,
                      fontSize: { xs: '1.1rem', md: '1.4rem' },
                      lineHeight: 1.5
                    }}
                  >
                    Enhance OutSystems Applications with Intelligent Insights.
                  </Typography>
                </Slide>
              </Grid>
            </Grid>
          </Fade>
        </Container>
      </Grid>
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Fade in={true} timeout={1200}>
          <Grid container spacing={2} sx={{ mb: 6 }}>
            <Grid item xs={12}>
              <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.1rem' }}>
                Comprehensive analytics and AI solutions tailored for OutSystems applications
              </Typography>
            </Grid>
          </Grid>
        </Fade>

        <Grid container spacing={4}>
          {services.map((service, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Zoom in={true} timeout={600 + idx * 200}>
                <Card
                  elevation={0}
                  sx={{
                    borderTop:'4px solid rgb(116,40,148)',
                    borderRadius:'12px',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(116,40,148,0.15)',
                      borderColor: 'rgb(116,40,148)'
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
                    <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Grid container sx={{ backgroundColor: '#ffffff', py: 5, mt: 8}}>
        <Container maxWidth="lg">
          <Fade in={true} timeout={1000}>
            <Grid container spacing={2} sx={{ mb: 6 }}>
              <Grid item xs={12}>
                <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" textAlign="center" color="rgb(116,40,148)">
                  Why Choose Our Solutions?
                </Typography>
                <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.1rem' }}>
                  Empower your OutSystems applications with cutting-edge analytics and AI capabilities
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
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Fade in={true} timeout={1000}>
          <Grid container spacing={2} sx={{ mb: 6 }}>
            <Grid item xs={12}>
              <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" textAlign="center" color="rgb(116,40,148)">
                Why Trust Us?
              </Typography>
              <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.1rem' }}>
                Partner with experts who understand both OutSystems and enterprise analytics
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
                    <Grid item sx={{ flexShrink: 0  }}>
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
                Ready to Transform Your OutSystems Applications?
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, fontSize: '1.1rem' }}>
                Let's discuss how data analytics and AI can accelerate your digital transformation
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

export default DataAnalyticsAIPage;