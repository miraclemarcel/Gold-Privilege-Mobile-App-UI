import React, { useState } from 'react'
import { Alert, Text, View, Linking, Modal } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';



import { 
  AlertPopUpCallOverlay,
  AlertPopUpSupportOverlay,
  AllSupportContainer, 
  CallText, 
  Colors, 
  InnerContainer, 
  OptCtaBtn, 
  OptCtaText, 
  PageTitle, 
  PageTitleHeader, 
  StyledContainer, 
  SupportCallBtn, 
  SupportCallBtnContainer, 
  SupportIcon, 
  SupportLeft, 
  SupportOptBtnContainer, 
  SupportOptContainer, 
  SupportOptText, 
  SupportOption, 
  SupportOptions, 
  SupportRightIcon 
} from '../../styles/Style';




const Support = () => {
  const [showCallOverlay, setShowCallOverlay] = useState(false);
  const [showWhatsappOverlay, setShowWhatsappOverlay] = useState(false);

  // =========WHATSAPP ALERT =======
const handleWhatsappUs = () => {
  setShowWhatsappOverlay(true);
};

 // Function to handle the "Cancel" button press and close the call modal
 const handleCloseChatModal = () => {
  setShowWhatsappOverlay(false);
};


// ========EMAIL ALERT ===============

const handleSendEmail = () => {
  Alert.alert(
    'Gold Privilege',
    '"Gold Privilege wants to open Email"',
    [
      {
        text: 'Close',
        onPress: () => console.log('Close pressed'),
        style: 'cancel',
      },
      {
        text: 'Allow',
        onPress: () => openEmail(),
      },
    ],
    { cancelable: false }
  );
};

const openEmail = () => {
  const emailAddress = 'support@goldprivilege.com'; // Replace with the desired email address
  const emailSubject = 'Support Request'; // Optional: Replace with the desired email subject
  const emailBody = 'Hello from Gold Privilege'; // Optional: Replace with the desired email body
  const emailUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  Linking.openURL(emailUrl);
};

// ========== CALLL POPUP===============

const handleSpeakWithUs = () => {
  setShowCallOverlay(true);
};

 // Function to handle the "Cancel" button press and close the call modal
 const handleCloseModal = () => {
  setShowCallOverlay(false);
};


  return (
    <SafeAreaView style={{flex: 1}}>
        <PageTitleHeader>
            <PageTitle>Customer Support</PageTitle>
        </PageTitleHeader>
        <StyledContainer>
            <InnerContainer>
              <AllSupportContainer>
                {/* ===========Live chat=========== */}
                <SupportOptions activeOpacity={0.7} onPress={handleWhatsappUs}>
                    <SupportLeft>
                      <SupportIcon>
                        <Ionicons name='chatbubble-ellipses' size={24} color={Colors.black}/>
                      </SupportIcon>
                      <SupportOption>Chat with us</SupportOption>
                    </SupportLeft>
                    <SupportRightIcon>
                      <Ionicons name='chevron-forward' size={24} color={Colors.black}/>
                    </SupportRightIcon>
                </SupportOptions>
                {/* =====Email option========== */}
                <SupportOptions activeOpacity={0.7} onPress={handleSendEmail}>
                    <SupportLeft>
                      <SupportIcon>
                        <Ionicons name='at' size={24} color={Colors.black}/>
                      </SupportIcon>
                      <SupportOption>Send us an email</SupportOption>
                    </SupportLeft>
                    <SupportRightIcon>
                      <Ionicons name='chevron-forward' size={24} color={Colors.black}/>
                    </SupportRightIcon>
                </SupportOptions>
                {/* ================ call option========== */}
                <SupportOptions activeOpacity={0.7} onPress={handleSpeakWithUs}>
                    <SupportLeft>
                      <SupportIcon>
                        <Ionicons name='call' size={24} color={Colors.black}/>
                      </SupportIcon>
                      <SupportOption>Speak with us</SupportOption>
                    </SupportLeft>
                    <SupportRightIcon>
                      <Ionicons name='chevron-forward' size={24} color={Colors.black}/>
                    </SupportRightIcon>
                </SupportOptions>
              </AllSupportContainer>

            </InnerContainer>
        </StyledContainer>
        {/* ===============CALL POP UP ===================== */}
          {showCallOverlay && (
        <Modal
        transparent={true} 
        visible={true} 
        animationType="fade"
        >
          <AlertPopUpCallOverlay>
            <SupportCallBtnContainer>
              <SupportCallBtn activeOpacity={0.8}>
                <Ionicons name='call' size={24} color={Colors.inputPlaceholder}/>
                <CallText>Call +234 803 456 7722</CallText>
              </SupportCallBtn>
              <SupportCallBtn activeOpacity={0.8} onPress={handleCloseModal}>
                <CallText>Cancel</CallText>
              </SupportCallBtn>
            </SupportCallBtnContainer>
          </AlertPopUpCallOverlay>
        </Modal>
        )}
        {/* ===============WHATSAPP POP UP ===================== */}
          {showWhatsappOverlay && (
        <Modal
        transparent={true} 
        visible={true} 
        animationType="fade"
        >
          <AlertPopUpSupportOverlay>
            <SupportOptContainer>
                <View >
                  <SupportOptText>“Gold Privilege” wants to open “Whatsapp”</SupportOptText>
                </View>
              <SupportOptBtnContainer>
                <OptCtaBtn onPress={handleCloseChatModal} activeOpacity={0.7}>
                  <OptCtaText>Cancel</OptCtaText>
                </OptCtaBtn>
                <OptCtaBtn activeOpacity={0.7}>
                  <OptCtaText>Open</OptCtaText>
                </OptCtaBtn>
              </SupportOptBtnContainer>
            </SupportOptContainer>
          </AlertPopUpSupportOverlay>
        </Modal>
        )}
    </SafeAreaView>
  )
}

export default Support
