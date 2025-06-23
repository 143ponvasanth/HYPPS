import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts';
import { 
  TrendingUp, 
  AttachMoney, 
  People, 
  Visibility,
  Group,
  AccessTime,
  CalendarToday
} from '@mui/icons-material';
import { 
  Box, 
  Typography, 
  Paper, 
  Avatar, 
  Chip,
  useTheme,
  styled,
  Container,
  Card,
  CardContent,
  Grid,
  Stack
} from '@mui/material';

const Dashboard = () => {
  const theme = useTheme();

  const revenueData = [
    { name: 'Jan', value: 2000 },
    { name: 'Feb', value: 2400 },
    { name: 'Mar', value: 1800 },
    { name: 'Apr', value: 2800 },
    { name: 'May', value: 2200 },
    { name: 'Jun', value: 3200 },
    { name: 'Jul', value: 2800 },
  ];

  const expensesData = [
    { name: 'Jan', value: 1200 },
    { name: 'Feb', value: 1600 },
    { name: 'Mar', value: 1400 },
    { name: 'Apr', value: 1800 },
    { name: 'May', value: 1500 },
    { name: 'Jun', value: 2000 },
    { name: 'Jul', value: 1700 },
  ];

  const salesData = [
    { name: 'Jan', value: 45 },
    { name: 'Feb', value: 52 },
    { name: 'Mar', value: 48 },
    { name: 'Apr', value: 61 },
    { name: 'May', value: 55 },
    { name: 'Jun', value: 67 },
    { name: 'Jul', value: 58 },
  ];

  const recentMessages = [
    {
      id: 1,
      name: 'Pon vasanth',
      message: 'who says i am gay',
      status: 'Asked',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '2 min'
    },
    {
      id: 2,
      name: 'Hentry',
      message: 'I am Spider man',
      status: 'Approved',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '5 min'
    },
    {
      id: 3,
      name: 'Pearson',
      message: 'I am jesus',
      status: 'Approved',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '10 min'
    }
  ];

  const GradientBox = styled(Box)(({ gradient }) => ({
    background: gradient,
    borderRadius: theme.shape.borderRadius * 2,
    padding: theme.spacing(1.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  }));

  // Summary Card Component with hover effect
  const SummaryCard = ({ title, value, icon: Icon, color }) => {
    return (
      <Card sx={{ 
        borderRadius: 2, 
        boxShadow: 0,
        border: '1px solid',
        borderColor: 'divider',
        height: '100%',
        minHeight: 120,
        width: '314.2px',
        maxWidth: 350,
        position: 'relative',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: 3,
          transform: 'translateY(-4px)'
        }
      }}>
        <CardContent sx={{ 
          height: '100%',
          padding: theme.spacing(3),
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Box sx={{ 
            pr: 10,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{ 
                textAlign: 'left',
                fontWeight: 500
              }}
            >
              {title}
            </Typography>
            <Typography 
              variant="h5" 
              fontWeight="bold" 
              sx={{ 
                textAlign: 'left',
                mt: 1,
                fontSize: '1.5rem'
              }}
            >
              {value}
            </Typography>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              right: theme.spacing(3),
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: `${color}.light`,
              color: `${color}.contrastText`,
              borderRadius: '50%',
              width: 56,
              height: 56,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 1,
              [theme.breakpoints.down('sm')]: {
                width: 48,
                height: 48
              }
            }}
          >
            <Icon fontSize="medium" />
          </Box>
        </CardContent>
      </Card>
    );
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4, px: { xs: 2, sm: 3, md: 4 } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'left' }}
        >
          <Typography 
            variant="h4" 
            component="h1" 
            fontWeight="bold" 
            gutterBottom
            sx={{ textAlign: 'left' }}
          >
            Dashboard
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ textAlign: 'left' }}
          >
            Welcome back, here's what's happening with your classes today.
          </Typography>
        </motion.div>

        {/* Summary Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Grid container spacing={3} sx={{ 
            mb: 4,
            alignItems: 'stretch'
          }}>
            <Grid item xs={12} sm={6} lg={3}>
              <SummaryCard
                title="Total Students"
                value={234}
                icon={Group}
                color="primary"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <SummaryCard
                title="Total Earnings"
                value="$12,450"
                icon={TrendingUp}
                color="success"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <SummaryCard
                title="Upcoming Classes"
                value={8}
                icon={CalendarToday}
                color="text"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <SummaryCard
                title="Pending Requests"
                value={12}
                icon={AccessTime}
                color="error"
              />
            </Grid>
          </Grid>
        </motion.div>

        {/* Revenue, Expenses, and Sales Cards */}
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 4,
          mb: 4
        }}>
          {/* Revenue Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Paper elevation={0} sx={{ 
              p: 3, 
              borderRadius: 3, 
              border: '1px solid', 
              borderColor: 'divider',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: 3,
                transform: 'translateY(-4px)'
              }
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                mb: 3 
              }}>
                <GradientBox gradient="linear-gradient(to right, #06b6d4, #3b82f6)">
                  <AttachMoney sx={{ color: 'common.white', fontSize: 24 }} />
                </GradientBox>
                <TrendingUp sx={{ color: 'success.main', fontSize: 20 }} />
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary" mb={1} sx={{ textAlign: 'left' }}>
                  Revenue
                </Typography>
                <Typography variant="h5" fontWeight="bold" sx={{ textAlign: 'left' }}>
                  $2400.50
                </Typography>
              </Box>
              <Box sx={{ mt: 3, height: 64 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <Bar dataKey="value" fill="#06b6d4" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </motion.div>

          {/* Expenses Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Paper elevation={0} sx={{ 
              p: 3, 
              borderRadius: 3, 
              border: '1px solid', 
              borderColor: 'divider',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: 3,
                transform: 'translateY(-4px)'
              }
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                mb: 3 
              }}>
                <GradientBox gradient="linear-gradient(to right, #a855f7, #ec4899)">
                  <People sx={{ color: 'common.white', fontSize: 24 }} />
                </GradientBox>
                <TrendingUp sx={{ color: 'success.main', fontSize: 20 }} />
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary" mb={1} sx={{ textAlign: 'left' }}>
                  Expenses
                </Typography>
                <Typography variant="h5" fontWeight="bold" sx={{ textAlign: 'left' }}>
                  $1850.20
                </Typography>
              </Box>
              <Box sx={{ mt: 3, height: 64 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={expensesData}>
                    <Bar dataKey="value" fill="#a855f7" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </motion.div>

          {/* Sales Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Paper elevation={0} sx={{ 
              p: 3, 
              borderRadius: 3, 
              border: '1px solid', 
              borderColor: 'divider',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: 3,
                transform: 'translateY(-4px)'
              }
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                mb: 3 
              }}>
                <GradientBox gradient="linear-gradient(to right, #3b82f6, #6366f1)">
                  <Visibility sx={{ color: 'common.white', fontSize: 24 }} />
                </GradientBox>
                <TrendingUp sx={{ color: 'success.main', fontSize: 20 }} />
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary" mb={1} sx={{ textAlign: 'left' }}>
                  Sales
                </Typography>
                <Typography variant="h5" fontWeight="bold" sx={{ textAlign: 'left' }}>
                  5678
                </Typography>
              </Box>
              <Box sx={{ mt: 3, height: 64 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </motion.div>
        </Box>

        {/* Recent Messages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Paper elevation={0} sx={{ 
            p: 3, 
            borderRadius: 3, 
            border: '1px solid', 
            borderColor: 'divider',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: 3,
              transform: 'translateY(-4px)'
            }
          }}>
            <Typography 
              variant="h6" 
              component="h2" 
              fontWeight="bold" 
              mb={4}
              sx={{ textAlign: 'left' }}
            >
              Recent Messages
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {recentMessages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    p: 2,
                    '&:hover': { 
                      backgroundColor: 'action.hover',
                      borderRadius: 2
                    },
                    transition: 'background-color 0.2s ease'
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar 
                        src={message.avatar} 
                        alt={message.name}
                        sx={{ width: 48, height: 48 }}
                      />
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography fontWeight="medium">{message.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {message.message}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Chip 
                        label={message.status}
                        size="small"
                        sx={{ 
                          backgroundColor: message.status === 'Approved' 
                            ? 'success.light' 
                            : 'warning.light',
                          color: message.status === 'Approved' 
                            ? 'success.dark' 
                            : 'warning.dark'
                        }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {message.time}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Dashboard;