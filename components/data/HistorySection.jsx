import { Box, Divider, Grid, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

/**
 *
 * @param {{list: HistoryList}} props - The props object.
 * @returns
 */
export default function HistorySection({ list }) {
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
      <Box sx={{ padding: 0, margin: 0 }}>
        {list.list.map((history, index) => (
          <Box key={index}>
            <Typography component="h3" fontSize="1.2rem" fontWeight="700">
              {history.title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '2px',
              }}
            >
              <Typography fontSize="1.2rem" lineHeight="1.3rem">
                {history.location}
              </Typography>
              <Typography fontSize="1.2rem" flexShrink="0" lineHeight="1.3rem">
                {history.dates}
              </Typography>
            </Box>
            <Box
              component="ul"
              sx={{
                padding: '0',
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
              }}
            >
              {history.details &&
                history.details.map((detail, index) => (
                  <Box
                    component="li"
                    size={6}
                    key={index}
                    sx={{ display: 'flex', gap: '2px', lineHeight: '1.2rem' }}
                  >
                    <CircleIcon
                      sx={{ width: '12px', color: 'primary.light' }}
                    />
                    <Typography>{detail}</Typography>
                  </Box>
                ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

/**
 * Represents a list of historical entries
 * @constructor
 * @param {string} title - The title/category of the history list
 * @param {HistoryEntry[]} list - An array of HistoryEntry objects
 */
export function HistoryList(title, list) {
  this.title = title;
  this.list = list;
}

/**
 * Represent a historical entry
 * @constructor
 * @param {string} title - The title of the entry
 * @param {string} location - The location/institution that the entry was completed at
 * @param {string} dates - The date range that the entry was cempleted during
 * @param {(string | JSX.Element)[]} details - A list of details/accomplishments from an entry
 */
export function HistoryEntry(title, location, dates, details) {
  this.title = title;
  this.location = location;
  this.dates = dates;
  this.details = details;
}
