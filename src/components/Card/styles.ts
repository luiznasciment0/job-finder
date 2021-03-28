import styled from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  height: 14.7rem;
  min-width: 34.4rem;
  padding: 1.2rem;
  background: #ffffff;
  border-radius: 0.4rem;
`

export const CompanyLogo = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 0.4rem;
  background: #006600;
  margin-right: 1.6rem;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const JobType = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  height: 26px;
  padding: 0.8rem 0.6rem;
  margin-bottom: 2.6rem;
  border: 1px solid #334680;
  border-radius: 4px;
`

export const Details = styled.div`
  display: flex;
  gap: 2.85rem;
`

export const DetailLabelWithIcon = styled.div`
  display: flex;
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.75rem;
  }
`
