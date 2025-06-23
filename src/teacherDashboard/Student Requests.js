import React, { useState } from 'react';
import { AccessTime, Check, Close, Search, FilterList } from '@mui/icons-material';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Avatar,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextareaAutosize,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  transition: 'box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: theme.shadows[4]
  }
}));

const StatusChip = styled(Chip)(({ status }) => ({
  textTransform: 'capitalize',
  ...(status === 'pending' && {
    backgroundColor: '#FFF3E0',
    color: '#E65100'
  }),
  ...(status === 'approved' && {
    backgroundColor: '#E8F5E9',
    color: '#2E7D32'
  }),
  ...(status === 'rejected' && {
    backgroundColor: '#FFEBEE',
    color: '#C62828'
  })
}));

const ActionButton = styled(Button)({
  padding: '6px 12px',
  fontSize: '0.875rem',
  minWidth: '100px'
});

const StudentRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      studentName: 'Alex Johnson',
      studentEmail: 'alex.johnson@email.com',
      courseName: 'Advanced Calculus Mastery',
      requestDate: '2024-01-15',
      message: 'I am very interested in advanced calculus and would like to improve my mathematical skills for my engineering degree.',
      status: 'pending',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 2,
      studentName: 'Maria Garcia',
      studentEmail: 'maria.garcia@email.com',
      courseName: 'Statistics for Beginners',
      requestDate: '2024-01-14',
      message: 'I need help with statistics for my psychology research. Looking forward to learning from you.',
      status: 'pending',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 3,
      studentName: 'David Chen',
      studentEmail: 'david.chen@email.com',
      courseName: 'Linear Algebra Fundamentals',
      requestDate: '2024-01-13',
      message: 'I am a computer science student and need strong foundation in linear algebra for machine learning.',
      status: 'approved',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 4,
      studentName: 'Sarah Wilson',
      studentEmail: 'sarah.wilson@email.com',
      courseName: 'Advanced Calculus Mastery',
      requestDate: '2024-01-12',
      message: 'Currently struggling with calculus concepts in my physics course. Would appreciate your guidance.',
      status: 'rejected',
      rejectionReason: 'Course is currently full. Please try again next semester.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ]);

  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [rejectionReason, setRejectionReason] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredRequests = requests.filter(request => {
    const matchesSearch = request.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.courseName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleApprove = (requestId) => {
    setRequests(requests.map(request => 
      request.id === requestId 
        ? { ...request, status: 'approved' }
        : request
    ));
  };

  const handleReject = (requestId) => {
    setSelectedRequest(requestId);
    setShowRejectModal(true);
  };

  const confirmReject = () => {
    if (selectedRequest && rejectionReason.trim()) {
      setRequests(requests.map(request => 
        request.id === selectedRequest 
          ? { ...request, status: 'rejected', rejectionReason }
          : request
      ));
      setShowRejectModal(false);
      setSelectedRequest(null);
      setRejectionReason('');
    }
  };

  const pendingCount = requests.filter(r => r.status === 'pending').length;
  const approvedCount = requests.filter(r => r.status === 'approved').length;
  const rejectedCount = requests.filter(r => r.status === 'rejected').length;

  return (
    <Box sx={{ p: 3, textAlign: 'left' }}>
      {/* Header Section */}
      <Box mb={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Student Requests
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Review and manage course enrollment requests
        </Typography>
      </Box>

      {/* Stats Cards Section */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box textAlign="left">
                  <Typography variant="body2" color="text.secondary">
                    Total Requests
                  </Typography>
                  <Typography variant="h4" component="div">
                    {requests.length}
                  </Typography>
                </Box>
                <AccessTime color="action" fontSize="large" />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box textAlign="left">
                  <Typography variant="body2" color="text.secondary">
                    Pending
                  </Typography>
                  <Typography variant="h4" component="div" color="warning.main">
                    {pendingCount}
                  </Typography>
                </Box>
                <AccessTime color="warning" fontSize="large" />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box textAlign="left">
                  <Typography variant="body2" color="text.secondary">
                    Approved
                  </Typography>
                  <Typography variant="h4" component="div" color="success.main">
                    {approvedCount}
                  </Typography>
                </Box>
                <Check color="success" fontSize="large" />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box textAlign="left">
                  <Typography variant="body2" color="text.secondary">
                    Rejected
                  </Typography>
                  <Typography variant="h4" component="div" color="error.main">
                    {rejectedCount}
                  </Typography>
                </Box>
                <Close color="error" fontSize="large" />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Filter Section */}
      <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              placeholder="Search by student name or course..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" gap={1}>
              <FilterList color="action" />
              <Select
                fullWidth
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <MenuItem value="all">All Status</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="approved">Approved</MenuItem>
                <MenuItem value="rejected">Rejected</MenuItem>
              </Select>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Requests List Section */}
      <Box>
        {filteredRequests.map((request) => (
          <StyledCard key={request.id}>
            <CardContent>
              <Box display="flex" flexDirection={{ xs: 'column', lg: 'row' }} justifyContent="space-between" gap={3}>
                <Box display="flex" gap={3}>
                  <Avatar 
                    src={request.avatar} 
                    alt={request.studentName} 
                    sx={{ width: 56, height: 56 }}
                  />
                  <Box flex={1}>
                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                      <Typography variant="h6" component="h3">
                        {request.studentName}
                      </Typography>
                      <StatusChip label={request.status} status={request.status} size="small" />
                    </Box>
                    <Typography variant="body2" color="text.secondary" mb={1}>
                      {request.studentEmail}
                    </Typography>
                    <Typography variant="body1" color="primary.main" mb={1}>
                      {request.courseName}
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {request.message}
                    </Typography>
                    {request.status === 'rejected' && request.rejectionReason && (
                      <Paper elevation={0} sx={{ p: 2, mb: 2, bgcolor: 'error.light' }}>
                        <Typography variant="body2" color="error.dark">
                          <strong>Rejection Reason:</strong> {request.rejectionReason}
                        </Typography>
                      </Paper>
                    )}
                    <Typography variant="caption" color="text.secondary">
                      Requested on {new Date(request.requestDate).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Box>
                
                {request.status === 'pending' && (
                  <Box display="flex" gap={2} justifyContent={{ xs: 'flex-start', lg: 'flex-end' }}>
                    <ActionButton
                      variant="contained"
                      color="success"
                      startIcon={<Check />}
                      onClick={() => handleApprove(request.id)}
                      size="small"
                    >
                      Approve
                    </ActionButton>
                    <ActionButton
                      variant="contained"
                      color="error"
                      startIcon={<Close />}
                      onClick={() => handleReject(request.id)}
                      size="small"
                    >
                      Reject
                    </ActionButton>
                  </Box>
                )}
              </Box>
            </CardContent>
          </StyledCard>
        ))}
      </Box>

      {/* Reject Modal Dialog */}
      <Dialog open={showRejectModal} onClose={() => setShowRejectModal(false)}>
        <DialogTitle sx={{ textAlign: 'left' }}>Reject Request</DialogTitle>
        <DialogContent sx={{ textAlign: 'left' }}>
          <DialogContentText mb={2}>
            Please provide a reason for rejecting this enrollment request:
          </DialogContentText>
          <TextareaAutosize
            minRows={4}
            value={rejectionReason}
            onChange={(e) => setRejectionReason(e.target.value)}
            placeholder="Enter rejection reason..."
            style={{ 
              width: '100%', 
              padding: '8px', 
              border: '1px solid #ccc', 
              borderRadius: '4px',
              fontFamily: 'inherit',
              fontSize: 'inherit'
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            setShowRejectModal(false);
            setSelectedRequest(null);
            setRejectionReason('');
          }}>
            Cancel
          </Button>
          <Button 
            onClick={confirmReject} 
            disabled={!rejectionReason.trim()}
            color="error"
            variant="contained"
            size="small"
          >
            Reject Request
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default StudentRequests;