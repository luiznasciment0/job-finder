import Typography from 'components/Typography'
import { StyledCard, CompanyLogo, InfoWrapper, JobType } from './styles'

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
    </InfoWrapper>
  </StyledCard>
)

export default Card
