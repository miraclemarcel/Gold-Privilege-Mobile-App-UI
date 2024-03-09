import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, Modal } from 'react-native';
import {
    BlockText,
  BottomCard,
  BottomCardLeft,
  BottomCardRight,
  CancelText,
  CardBtnContainer,
  CardButtonText,
  CardContainer,
  CardInner,
  CardMembershipIDYellow,
  CardModalBtnBlock,
  CardModalBtnCancel,
  CardModalConatainer,
  CardModalInner,
  CardModalQuestion,
  CardNoticeIcon,
  CardUsernameWhite,
  Colors,
  GoldPriviTextRightWhite,
  MiddleCard,
  TopCard,
  VirtualCardButton,
  VirtualCardContainer,
} from '../../styles/Style';
import { Octicons } from '@expo/vector-icons';

export const VirtualCard = () => {
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  // Function to handle blocking the card
  const blockCard = () => {
    // blocking logic here
    setModalVisible(false); // Close the modal after blocking
  };

  return (
    <CardContainer>
      <VirtualCardContainer>
        <CardInner>
          <TopCard>
            <GoldPriviTextRightWhite>GOLD PRIVILEGE</GoldPriviTextRightWhite>
          </TopCard>
          <MiddleCard>
            <Image source={require('../../assets/images/Chip.png')} />
          </MiddleCard>
          <BottomCard>
            <BottomCardLeft>
              <CardUsernameWhite>MIRACLE MARCEL</CardUsernameWhite>
              <CardMembershipIDYellow>Membership No: 2023010001</CardMembershipIDYellow>
            </BottomCardLeft>
            <BottomCardRight>
              <Image source={require('../../assets/images/GOLD-CARD-ICON.png')} />
            </BottomCardRight>
          </BottomCard>
        </CardInner>
      </VirtualCardContainer>
      <TouchableOpacity activeOpacity={0.9} onPress={() => setModalVisible(true)}>
        <VirtualCardButton>
          <CardButtonText>Block Card</CardButtonText>
        </VirtualCardButton>
      </TouchableOpacity>

      {/* Modal for confirming card blocking */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <CardModalConatainer >
          <CardModalInner >
            <CardNoticeIcon>
                <Octicons name="alert" size={24} color={Colors.primary}/>
            </CardNoticeIcon>
            <CardModalQuestion>Are you sure you want to block this card? If yes, you will be denied access to the Gold-Privileges services.</CardModalQuestion>
            <CardBtnContainer>
            <TouchableOpacity onPress={() => setModalVisible(false)} activeOpacity={0.9}>
                <CardModalBtnCancel>
                    <CancelText>Cancel</CancelText>
                </CardModalBtnCancel>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 20 }} onPress={blockCard} activeOpacity={0.9}>
                <CardModalBtnBlock>
                    <BlockText>Yes! Block</BlockText>
                </CardModalBtnBlock>
              </TouchableOpacity>
            </CardBtnContainer>
          </CardModalInner>
        </CardModalConatainer>
      </Modal>
    </CardContainer>
  );
};
