import React, { useState, useRef } from 'react';
import { Image, ScrollView, View, TouchableOpacity, Share } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import { captureRef } from 'react-native-view-shot';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AvartarBtnContainer, AvatarBottomContainer, AvatarName, AvatarNameContainer, AvatarUploadContainer, AvatarUploadDisplay, AvatartListContainer, ButtonText, ChooseAvatarBox, ChooseAvatarImage, ChooseAvatarImageContainer, ChooseAvatarName, InnerContainer, PageTitle, PageTitleHeader, ShareBtn, StyledContainer, UploadBtnBtn } from '../../styles/Style';
import { Ionicons } from '@expo/vector-icons';

const AvatarImageList = [
  { id: "1", AvatarImage : require('../../assets/images/man-1.png'), AvatarTitle: "Adam Mccall" },
  { id: "2", AvatarImage : require('../../assets/images/man-2.png'), AvatarTitle: "Warren Daniel" },
  { id: "3", AvatarImage : require('../../assets/images/man-3.png'), AvatarTitle: "Jackson" },
  { id: "4", AvatarImage : require('../../assets/images/man-4.png'), AvatarTitle: "Lawrence" },
  { id: "5", AvatarImage : require('../../assets/images/man-5.png'), AvatarTitle: "Henry" },
  { id: "6", AvatarImage : require('../../assets/images/lady-4.png'), AvatarTitle: "Maria Joyce" },
  { id: "7", AvatarImage : require('../../assets/images/lady-3.png'), AvatarTitle: "Emma Berger" },
  { id: "8", AvatarImage : require('../../assets/images/Avatar-Img.png'), AvatarTitle: "Shyla Bandhu" },
  { id: "9", AvatarImage : require('../../assets/images/lady-2.png'), AvatarTitle: "Tisha Norton" },
  { id: "10", AvatarImage : require('../../assets/images/lady-1.png'), AvatarTitle: "Sophia" },
];

function AvatarUpload() {
   const [selectedAvatar, setSelectedAvatar] = useState(AvatarImageList[7]); // Default to the avatar with ID 8
   const containerRef = useRef(null);

  const handleAvatarSelection = (avatar) => {
    setSelectedAvatar(avatar);
  };

//   ==========share logic ===========

const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out my avatar: ${selectedAvatar.AvatarTitle}`,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  
// const handleShare = async () => {
//     try {
//       // Capture a screenshot of the AvatarUploadDisplay container
//       const uri = await captureRef(containerRef, { format: 'png', quality: 1 });

//       if (!(await Sharing.isAvailableAsync())) {
//         alert('Sharing is not available on your device');
//         return;
//       }

//       await Sharing.shareAsync(uri);
//     } catch (error) {
//       console.error('Error sharing image:', error);
//     }
//   };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageTitleHeader>
        <PageTitle>Choose an Avatar</PageTitle>
      </PageTitleHeader>
     
        <AvatarUploadContainer>
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
          <InnerContainer>
            <AvatarUploadDisplay source={selectedAvatar.AvatarImage}>
              <AvatarNameContainer>
                <AvatarName>{selectedAvatar.AvatarTitle}</AvatarName>
              </AvatarNameContainer>
            </AvatarUploadDisplay>
             {/* avatars list ============ */}
             <AvatarBottomContainer>
              <AvatartListContainer>
                {AvatarImageList.map((avatar, index) => (
             
                    <ChooseAvatarBox key={avatar.id} onPress={() => handleAvatarSelection(avatar)} activeOpacity={0.8}>
                      <ChooseAvatarImageContainer>
                        <ChooseAvatarImage source={avatar.AvatarImage} />
                      </ChooseAvatarImageContainer>
                      <AvatarNameContainer>
                        <ChooseAvatarName>{avatar.AvatarTitle}</ChooseAvatarName>
                      </AvatarNameContainer>
                    </ChooseAvatarBox>
              
                ))}
              </AvatartListContainer>
              <AvartarBtnContainer>
                <UploadBtnBtn activeOpacity={0.8}>
                  <ButtonText>Set as Avatar</ButtonText>
                </UploadBtnBtn>
                <ShareBtn activeOpacity={0.7} onPress={handleShare}>
                  <Ionicons name='share-social' size={24} />
                </ShareBtn>
              </AvartarBtnContainer>
            </AvatarBottomContainer>
          </InnerContainer>
         
          </ScrollView>
        </AvatarUploadContainer>

    </SafeAreaView>
  );
}

export default AvatarUpload;
