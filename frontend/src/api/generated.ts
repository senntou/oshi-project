import { z } from 'zod';

const HealthCheckResponse = z.object({ status: z.string() }).passthrough();
const Actor = z.object({ id: z.string(), name: z.string() }).passthrough();
const ActorsResponse = z.object({ actors: z.array(Actor) }).passthrough();
const Season = z.enum(['SPRING', 'SUMMER', 'AUTUMN', 'WINTER']);
const AnimeContent = z
  .object({
    contentId: z.string(),
    title: z.string(),
    description: z.string(),
    year: z.number().int(),
    season: Season,
  })
  .passthrough();
const RadioContent = z
  .object({
    contentId: z.string(),
    title: z.string(),
    description: z.string(),
    scheduleType: z.string(),
    startDate: z.string(),
    endDate: z.string(),
  })
  .passthrough();
const SpecificDateEvent = z
  .object({ date: z.string(), customTitle: z.string() })
  .passthrough();
const LiveContent = z
  .object({
    contentId: z.string(),
    title: z.string(),
    description: z.string(),
    specificDateEvent: z.array(SpecificDateEvent),
  })
  .passthrough();
const ContentList = z
  .object({
    anime: z.array(AnimeContent),
    radio: z.array(RadioContent),
    live: z.array(LiveContent),
  })
  .passthrough();
const ActorContentsResponse = z
  .object({ Actor: Actor, contents: ContentList })
  .passthrough();
const SeasonContentRequestBody = z
  .object({
    title: z.string(),
    description: z.string(),
    year: z.number().int(),
    season: Season,
  })
  .passthrough();
const ContentResponse = z
  .object({ id: z.string(), actorId: z.string(), title: z.string() })
  .passthrough();
const User = z.object({ id: z.string(), name: z.string() }).passthrough();
const UsersMeResponse = z.object({ user: User }).passthrough();
const Category = z.enum([
  'ANIME',
  'RADIO',
  'LIVE',
  'EVENT',
  'PROGRAM',
  'ANNIVERSARY',
  'OTHER',
]);

export const schemas = {
  HealthCheckResponse,
  Actor,
  ActorsResponse,
  Season,
  AnimeContent,
  RadioContent,
  SpecificDateEvent,
  LiveContent,
  ContentList,
  ActorContentsResponse,
  SeasonContentRequestBody,
  ContentResponse,
  User,
  UsersMeResponse,
  Category,
};
