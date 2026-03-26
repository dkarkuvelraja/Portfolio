import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email, Phone } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 500 }}
          >
            © {new Date().getFullYear()} Karkuvel Raja. Built with React & MUI.
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              href="https://github.com/dkarkuvelraja"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
                transition: 'all 0.3s ease',
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/karkuvelraja"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
                transition: 'all 0.3s ease',
              }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="mailto:dkarkuvelraja@gmail.com"
              size="small"
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
                transition: 'all 0.3s ease',
              }}
            >
              <Email />
            </IconButton>
            <IconButton
              href="tel:+918220847505"
              size="small"
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
                transition: 'all 0.3s ease',
              }}
            >
              <Phone />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
