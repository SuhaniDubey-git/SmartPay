
import {
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Divider
} from "@mui/material";

const About = () => {
  const features = [
    {
      icon: "👥",
      title: "Group Management",
      description:
        "Create groups and manage shared expenses with friends, roommates and family."
    },
    {
      icon: "💰",
      title: "Expense Tracking",
      description:
        "Keep track of shared expenses and individual contributions in one place."
    },
    {
      icon: "📊",
      title: "Expense Analytics",
      description:
        "Understand your spending patterns through monthly summaries and category-wise graphs."
    },
    {
      icon: "⚡",
      title: "Easy Settlements",
      description:
        "View group balances and know exactly who owes whom."
    },
    {
      icon: "🔐",
      title: "Secure Authentication",
      description:
        "User authentication powered by JSON Web Tokens."
    },
    {
      icon: "📱",
      title: "Multiple Users",
      description:
        "Register and manage your expenses with multiple users seamlessly."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>

      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 8,
          px: 3,
          mb: 6,
          borderRadius: 4,
          background: "linear-gradient(135deg, #202B3D, #101522)"
        }}
      >
        <Typography
          variant="h2"
          fontWeight={800}
          sx={{ color: "#A78BFA", mb: 2 }}
        >
          SmartPay
        </Typography>

        <Typography variant="h5" sx={{ color: "#F8FAFC", mb: 2 }}>
          Split smarter. Spend better.
        </Typography>

        <Typography
          sx={{
            color: "#A1A1AA",
            maxWidth: 650,
            mx: "auto",
            lineHeight: 1.8,
            mb: 4
          }}
        >
          Your all-in-one platform for managing group expenses,
          tracking shared payments and making settlements effortless.
        </Typography>

        <Button
          variant="contained"
          href="https://splitapp-rnjo.onrender.com/"
          target="_blank"
          sx={{
            bgcolor: "#A78BFA",
            color: "#101522",
            fontWeight: 700,
            px: 4,
            py: 1.3,
            "&:hover": { bgcolor: "#C4A8FF" }
          }}
        >
          Explore SmartPay
        </Button>
      </Box>

      {/* Introduction */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
          Introduction
        </Typography>

        <Typography color="text.secondary" lineHeight={1.9}>
          SmartPay is a full-stack group expense management application
          built using the MERN stack (MongoDB, Express.js, React.js
          and Node.js). Designed to simplify shared finances, it allows
          users to create groups, add expenses, track balances and
          analyze their spending habits. Whether you're sharing bills
          with friends or managing group expenses, SmartPay keeps
          everything organized and transparent.
        </Typography>
      </Box>

      <Divider sx={{ mb: 5 }} />

      {/* Features */}
      <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
        Key Features
      </Typography>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  borderColor: "#A78BFA"
                }
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h3" sx={{ mb: 2 }}>
                  {feature.icon}
                </Typography>

                <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                  {feature.title}
                </Typography>

                <Typography color="text.secondary" lineHeight={1.8}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ mb: 5 }} />

      {/* Technology Stack */}
      <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
        Technology Stack
      </Typography>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {[
          {
            title: "Frontend",
            items: ["React.js", "Redux", "Axios", "Material UI", "Chart.js"]
          },
          {
            title: "Backend",
            items: ["Node.js", "Express.js", "Mongoose", "JWT", "bcryptjs"]
          },
          {
            title: "Database",
            items: ["MongoDB Atlas"]
          }
        ].map((section) => (
          <Grid item xs={12} md={4} key={section.title}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider"
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ color: "#A78BFA", mb: 2 }}
                >
                  {section.title}
                </Typography>

                {section.items.map((item) => (
                  <Typography
                    key={item}
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    • {item}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Closing */}
      <Box sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
          Shared expenses, simplified.
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Spend less time calculating and more time enjoying.
        </Typography>

        <Button
          variant="contained"
          href="https://splitapp-rnjo.onrender.com/"
          target="_blank"
          sx={{
            bgcolor: "#A78BFA",
            color: "#101522",
            fontWeight: 700,
            px: 4,
            "&:hover": { bgcolor: "#C4A8FF" }
          }}
        >
          Get Started
        </Button>
      </Box>

    </Container>
  );
};

export default About;
