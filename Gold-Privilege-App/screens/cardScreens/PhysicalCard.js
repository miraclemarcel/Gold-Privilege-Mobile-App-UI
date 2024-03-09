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
  CardMembershipID,
  CardModalBtnBlock,
  CardModalBtnCancel,
  CardModalConatainer,
  CardModalInner,
  CardModalQuestion,
  CardNoticeIcon,
  CardUsername,
  Colors,
  GoldPriviTextRight,
  MiddleCard,
  PhysicalCardButton,
  PhysicalCardContainer,
  TopCard,
} from '../../styles/Style';
import { Ionicons, Octicons } from '@expo/vector-icons';

export const PhysicalCard = () => {
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  // Function to handle blocking the card
  const blockCard = () => {
    // blocking logic here
    setModalVisible(false); // Close the modal after blocking
  };

  return (
    <CardContainer>
      <PhysicalCardContainer>
        <CardInner>
          <TopCard>
            <GoldPriviTextRight>GOLD PRIVILEGE</GoldPriviTextRight>
          </TopCard>
          <MiddleCard>
            <Image source={require('../../assets/images/Chip.png')} />
          </MiddleCard>
          <BottomCard>
            <BottomCardLeft>
              <CardUsername>MIRACLE MARCEL</CardUsername>
              <CardMembershipID>Membership No: 2023010001</CardMembershipID>
            </BottomCardLeft>
            <BottomCardRight>
              <Image source={require('../../assets/images/GOLD-CARD-ICON.png')} />
            </BottomCardRight>
          </BottomCard>
        </CardInner>
      </PhysicalCardContainer>
      <TouchableOpacity activeOpacity={0.9} onPress={() => setModalVisible(true)}>
        <PhysicalCardButton>
          <CardButtonText>Block Card</CardButtonText>
        </PhysicalCardButton>
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
