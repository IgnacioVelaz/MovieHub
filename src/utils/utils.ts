export const tmdbToMongoGenresIds = (tmdb_genresIds: number[]) => {
  const conversionTable: Record<string, string> = {
    "28": "65554db863d4cd0dc7f13182",
    "12": "65554db863d4cd0dc7f13183",
    "16": "65554db863d4cd0dc7f13184",
    "35": "65554db863d4cd0dc7f13185",
    "80": "65554db863d4cd0dc7f13186",
    "99": "65554db863d4cd0dc7f13187",
    "18": "65554db863d4cd0dc7f13188",
    "10751": "65554db863d4cd0dc7f13189",
    "14": "65554db863d4cd0dc7f1318a",
    "36": "65554db863d4cd0dc7f1318b",
    "27": "65554db863d4cd0dc7f1318c",
    "10402": "65554db863d4cd0dc7f1318d",
    "9648": "65554db863d4cd0dc7f1318e",
    "10749": "65554db863d4cd0dc7f1318f",
    "878": "65554db863d4cd0dc7f13190",
    "10770": "65554db863d4cd0dc7f13191",
    "53": "65554db863d4cd0dc7f13192",
    "10752": "65554db863d4cd0dc7f13193",
    "37": "65554db863d4cd0dc7f13194",
  };

  return tmdb_genresIds.map(
    (genreId: number) =>
      conversionTable[genreId.toString()] || "65572e933914bb1250ca027f"
  );
};
