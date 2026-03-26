import { useRef, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  IconButton,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  Email,
  Phone,
  LinkedIn,
  GitHub,
  LocationOn,
  Send,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionWrapper from '../components/SectionWrapper';

// ============================================================
// 🔑 REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
//    1. Sign up at https://www.emailjs.com/
//    2. Add an Email Service (e.g. Gmail) → copy Service ID
//    3. Create a Template with variables:
//       {{from_name}}, {{from_email}}, {{message}}
//       → copy Template ID
//    4. Go to Account → General → copy Public Key
// ============================================================
const EMAILJS_SERVICE_ID = 'service_5vhh7cf';
const EMAILJS_TEMPLATE_ID = 'template_6c4pw6l';
const EMAILJS_PUBLIC_KEY = 'ES2ZxPTyfJTfDwe0A';

const contactInfo = [
  {
    icon: <Email sx={{ fontSize: 28 }} />,
    label: 'Email',
    value: 'dkarkuvelraja@gmail.com',
    href: 'mailto:dkarkuvelraja@gmail.com',
  },
  {
    icon: <Phone sx={{ fontSize: 28 }} />,
    label: 'Phone',
    value: '+91 82208 47505',
    href: 'tel:+918220847505',
  },
  {
    icon: <LinkedIn sx={{ fontSize: 28 }} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/karkuvelraja',
    href: 'https://linkedin.com/in/karkuvelraja',
  },
  {
    icon: <GitHub sx={{ fontSize: 28 }} />,
    label: 'GitHub',
    value: 'github.com/karkuvelraja',
    href: 'https://github.com/dkarkuvelraja',
  },
  {
    icon: <LocationOn sx={{ fontSize: 28 }} />,
    label: 'Location',
    value: 'Tamil Nadu, India',
    href: null,
  },
];

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackSeverity, setSnackSeverity] = useState('success');
  const [snackMessage, setSnackMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      console.log('Email sent successfully!', emailjs);
      setSnackSeverity('success');
      setSnackMessage('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSnackSeverity('error');
      setSnackMessage('Failed to send message. Please try again or email me directly.');
    } finally {
      setSending(false);
      setSnackOpen(true);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Feel free to reach out for collaborations or just a friendly hello"
    >
      <Box ref={ref}>
        <Grid container spacing={4}>
          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
                Let's work together
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                I'm always interested in hearing about new opportunities, interesting projects, and
                ways to make an impact with technology.
              </Typography>

              <Stack spacing={2.5}>
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={2}
                      component={item.href ? 'a' : 'div'}
                      href={item.href || undefined}
                      target={item.href?.startsWith('http') ? '_blank' : undefined}
                      rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                        p: 1.5,
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': item.href
                          ? {
                            backgroundColor: (theme) =>
                              theme.palette.mode === 'dark'
                                ? 'rgba(108, 99, 255, 0.08)'
                                : 'rgba(90, 82, 224, 0.06)',
                            transform: 'translateX(8px)',
                          }
                          : {},
                      }}
                    >
                      <Box
                        sx={{
                          p: 1.2,
                          borderRadius: 2,
                          backgroundColor: (theme) =>
                            theme.palette.mode === 'dark'
                              ? 'rgba(108, 99, 255, 0.12)'
                              : 'rgba(90, 82, 224, 0.08)',
                          color: 'primary.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                          {item.label}
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {item.value}
                        </Typography>
                      </Box>
                    </Stack>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                sx={{
                  p: { xs: 3, md: 4 },
                  '&:hover': {
                    borderColor: 'primary.main',
                  },
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                    Send me a message
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={2.5}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Your Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid size={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          multiline
                          rows={5}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid size={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          disabled={sending}
                          endIcon={sending ? <CircularProgress size={20} color="inherit" /> : <Send />}
                          sx={{
                            px: 5,
                            py: 1.5,
                            background: (theme) =>
                              `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                            '&:hover': {
                              background: (theme) =>
                                `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                              transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {sending ? 'Sending...' : 'Send Message'}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackOpen(false)}
          severity={snackSeverity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackMessage}
        </Alert>
      </Snackbar>
    </SectionWrapper>
  );
};

export default Contact;
