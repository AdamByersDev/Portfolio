import { Box, Divider, Grid, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

/**
 *
 * @param {{list: SkillList}} props - The props object.
 * @returns
 */
export default function SkillSection({ list }) {
  return (
    <Box component="section" id={list.title}>
      <Typography component="h2" variant="h5">
        {list.title}
      </Typography>
      <Divider
        sx={{
          borderColor: 'primary.main',
          borderBottomWidth: 3,
          backgroundColor: 'primary.main',
        }}
      />
      <Grid container component="ul" sx={{ padding: 0, margin: 0 }}>
        {list.list.map((skill, index) => (
          <Grid
            component="li"
            size={6}
            key={index}
            sx={{ display: 'flex', gap: '2px' }}
          >
            <CircleIcon sx={{ width: '12px', color: 'primary.light' }} />
            <Typography>{skill}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

/**
 * Represents a list of skills.
 * @constructor
 * @param {string} title - The title/category of the skill list
 * @param {string[]} list - An array of skill names
 */
export function SkillList(title, list) {
  this.title = title;
  this.list = list;
}
