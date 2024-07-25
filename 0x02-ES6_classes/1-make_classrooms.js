import classRoom from './0-classroom';

export default function initializeRooms() {
  const room19 = new classRoom(19); // eslint-disable-line new-cap
  const room20 = new classRoom(20); // eslint-disable-line new-cap
  const room34 = new classRoom(34); // eslint-disable-line new-cap
  return [room19, room20, room34];
}
