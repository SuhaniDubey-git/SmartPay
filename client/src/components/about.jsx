
import { Typography, Container, Box, Grid, Card, CardContent } from "@mui/material";

const About = () => {
  const features = [
    {
      icon: "💸",
      title: "Effortless Expense Splitting",
      description:
        "Split bills and shared expenses with friends without the hassle of manual calculations."
    },
    {
      icon: "👥",
      title: "Manage Groups",
      description:
        "Create groups, add members and keep everyone's shared expenses organized in one place."
    },
    {
      icon: "📊",
      title: "Smart Analytics",
      description:
        "Visualize your spending habits with insightful charts and expense summaries."
    },
    {
      icon: "⚡",
      title: "Easy Settlements",
      description:
        "Track who owes whom and make settling shared balances simple and transparent."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box
        sx={{
          textAlign: "center",
          py: 7,
          px: 3,
          mb: 5,
          borderRadius: 4,
          background: "linear-gradient(135deg, #202B3D, #182233)"
        }}
      >
        <Typography variant="h2" fontWeight={800} sx={{ color: "#A78BFA", mb: 2 }}>
          SmartPay
        </Typography>

        <Typography variant="h5" sx={{ color: "#F8FAFC", mb: 2 }}>
          Split smarter. Spend better.
        </Typography>

        <Typography
          sx={{ color: "#A1A1AA", maxWidth: 650, mx: "auto", lineHeight: 1.8 }}
        >
          Managing shared expenses shouldn't be complicated.
          SmartPay makes splitting bills, tracking group expenses
          and managing balances simple, transparent and stress-free.
        </Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
          About SmartPay
        </Typography>

        <Typography sx={{ color: "text.secondary", lineHeight: 1.9 }}>
          SmartPay is a group expense management platform designed
          to make sharing expenses easier. Whether you're planning
          a trip, sharing accommodation or managing everyday expenses
          with friends, SmartPay helps you stay organized and keep
          track of every transaction.
        </Typography>
      </Box>

      <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
        What You Can Do
      </Typography>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              sx={{
                height: "100%",
                bgcolor: "background.paper",
                borderRadius: 3,
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

      <Box sx={{ textAlign: "center", py: 4 }}>
        <Typography variant="h5" fontWeight={700} sx={{ mb: 1 }}>
          Less confusion. More connection.
        </Typography>

        <Typography color="text.secondary">
          SmartPay — making shared finances simpler, one expense at a time.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
