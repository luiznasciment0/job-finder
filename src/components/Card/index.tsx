import Typography from 'components/Typography'
import WorldIcon from 'assets/world-icon.svg'
import TimeIcon from 'assets/time-icon.svg'
import {
  StyledCard,
  CompanyLogo,
  InfoWrapper,
  JobType,
  Details,
  DetailLabelWithIcon
} from './styles'

const Card = () => (
  <StyledCard>
    <CompanyLogo />
    <InfoWrapper>
      <Typography weight="bold" size="small" margin="small" family="secondary">
        Kasisto
      </Typography>
      <Typography
        weight="normal"
        size="large"
        margin="medium"
        family="secondary"
      >
        Front-End Software Engineer
      </Typography>
      <JobType>
        <Typography weight="bold" size="small" family="secondary">
          Full time
        </Typography>
      </JobType>
      <Details>
        <DetailLabelWithIcon>
          <img src={WorldIcon} alt="World icon" />
          <Typography
            weight="medium"
            size="small"
            family="secondary"
            color="palegray"
          >
            New York
          </Typography>
        </DetailLabelWithIcon>
        <DetailLabelWithIcon>
          <img src={TimeIcon} alt="Clock icon" />
          <Typography
            weight="medium"
            size="small"
            family="secondary"
            color="palegray"
          >
            5 days ago
          </Typography>
        </DetailLabelWithIcon>
      </Details>
    </InfoWrapper>
  </StyledCard>
)

export default Card
