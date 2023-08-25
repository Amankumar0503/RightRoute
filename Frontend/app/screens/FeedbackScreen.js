import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';
import FormSubmmitButton from '../component/FormSubmmitButton';
import Modal from 'react-native-modal'; // Import the modal component

const FeedbackScreen = () => {
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false); // State for modal visibility

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      // Perform your submit logic here
      console.log(`User's rating: ${rating}`);
      // Simulate a delay for submission
      await new Promise(resolve => setTimeout(resolve, 150));
      console.log('Feedback submitted successfully');
      setSuccessModalVisible(true); // Show the success modal
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessModal = () => {
    setSuccessModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate Our App</Text>
      <Text style={styles.description}>We would love to hear your feedback! Please rate our app below.</Text>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={rating}
        selectedStar={handleRatingChange}
        starSize={40}
        fullStarColor={'#FFD700'}
        emptyStarColor={'#C0C0C0'}
      />
      <FormSubmmitButton
        submitting={isSubmitting}
        onPress={handleSubmit}
        title='Submit Feedback'
      />
      {/* Success Modal */}
      <Modal isVisible={isSuccessModalVisible} onBackdropPress={closeSuccessModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Thank You!</Text>
          <Text>Your feedback has been submitted successfully.</Text>
          <TouchableOpacity style={styles.modalButton} onPress={closeSuccessModal}>
            <Text style={styles.modalButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
    textAlign: 'center',
  },
  // Modal styles
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FeedbackScreen;
