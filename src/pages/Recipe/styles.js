import styled from 'styled-components';

export const Wrapper = styled.div``;

export const BigImagePicture = styled.picture`
	display: block;
	height: 400px;
	width: 100%;
`;

export const BigImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Title = styled.h1``;

export const Content = styled.div``;

export const SubTitle = styled.h3``;

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  & > * {
    margin: 0 10px 10px 0;
  }
`;
