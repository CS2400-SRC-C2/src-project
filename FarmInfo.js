/**
 * Array of polygon landmarks representing different crops and gardens.
 * Each element in the array represents a corner coordinate of a polygon for a specific crop or garden.
 * @type {Array<Array<{lat: number, lng: number}>>}
 */
export const polygonLandmarks = [
  //crop 1
  [
    { lat: 34.05444, lng: -117.76173 }, // Top-left corner
    { lat: 34.05444, lng: -117.76188 }, // Top-right corner
    { lat: 34.05439, lng: -117.76188 }, // Bottom-right corner
    { lat: 34.05439, lng: -117.76173 }, // Bottom-left corner
  ],
  //crop 2
  [
    { lat: 34.05436, lng: -117.7619 },
    { lat: 34.05436, lng: -117.76173 },
    { lat: 34.05427, lng: -117.76173 },
    { lat: 34.05427, lng: -117.7619 },
  ],
  //crop 3
  [
    { lat: 34.05426, lng: -117.76185 },
    { lat: 34.05426, lng: -117.76158 },
    { lat: 34.0542, lng: -117.76158 },
    { lat: 34.0542, lng: -117.76185 },
  ],
  //crop 4
  [
    { lat: 34.05417, lng: -117.76185 },
    { lat: 34.05417, lng: -117.7616 },
    { lat: 34.05409, lng: -117.7616 },
    { lat: 34.05409, lng: -117.76185 },
  ],
  //crop 5
  [
    { lat: 34.05407, lng: -117.76185 }, // Top-left corner
    { lat: 34.05407, lng: -117.76173 }, // Top-right corner
    { lat: 34.054, lng: -117.76173 }, // Bottom-left corner
    { lat: 34.054, lng: -117.76185 }, // Bottom-right corner
  ],
  //Side Garden
  [
    { lat: 34.05421, lng: -117.762 },
    { lat: 34.05421, lng: -117.76192 },
    { lat: 34.0544, lng: -117.76192 },
    { lat: 34.0544, lng: -117.762 },
  ],
  //Native Garden
  [
    { lat: 34.05425, lng: -117.76111 },
    { lat: 34.05425, lng: -117.76102 },
    { lat: 34.05389, lng: -117.76102 },
    { lat: 34.05389, lng: -117.76111 },
  ],
  //African Garden
  [
    { lat: 34.05467, lng: -117.762 },
    { lat: 34.05467, lng: -117.76192 },
    { lat: 34.05451, lng: -117.76192 },
    { lat: 34.05451, lng: -117.762 },
  ],
];

/**
 * Array of polygon landmarks information.
 * Each element in the array contains the title, description, and map color of a specific crop or garden.
 * @type {Array<{title: string, description: string, color: string}>}
 */
export const polygonLandmarksInfo = [
  { title: 'Crop 1', description: '', color: '#3c566c' },
  { title: 'Crop 2', description: '', color: '#3c566c' },
  { title: 'Crop 3', description: '', color: '#3c566c' },
  { title: 'Crop 4', description: '', color: '#3c566c' },
  { title: 'Crop 5', description: '', color: '#3c566c' },
  { title: 'Side Garden', description: '', color: '#84aea4' },
  {
    title: 'N8TV Garden',
    description:
      'Preservation of our California native flora and fauna is very important, especially to indigenous community members who are unable to explore these plants in the wild. The purpose of this farm is to bring these culturally important crops and seeds closer to them and continue to foster and grow them.',
    color: '#84aea4',
  },
  {
    title: 'African Garden',
    description:
      'Here you can access African diasporic foods, grown by dedicated members of our community who want to represent their culture. Fruits and vegetables from all over Africa are grown right here.',
    color: '#84aea4',
  },
];

/**
 * Array of border coordinates for the farm. Uses decimal degrees.
 * @type {Array<{lat: number, lng: number}>}
 */
export const borderCoords = [
  { lat: 34.054721, lng: -117.762064 }, //tl
  { lat: 34.053954, lng: -117.762064 },
  { lat: 34.053954, lng: -117.761546 },
  { lat: 34.053531, lng: -117.761546 },
  { lat: 34.053531, lng: -117.761053 },
  { lat: 34.053816, lng: -117.761053},
  { lat: 34.053816, lng: -117.760976 },
  { lat: 34.054721, lng: -117.761000 },
];

/**
 * Array of single land marks with latitude and longitude coordinates.
 * @type {Array<{lat: number, lng: number}>}
 */
export const singleLandMarks = [
  { lat: 34.05404, lng: -117.76191 },
  { lat: 34.05405, lng: -117.7617 },
  { lat: 34.05403, lng: -117.76145 },
  { lat: 34.05403, lng: -117.76152 },
  { lat: 34.05386, lng: -117.76137 },
  { lat: 34.05403, lng: -117.7613 },
  { lat: 34.05414, lng: -117.76117 },
  { lat: 34.05459, lng: -117.76138 },
  { lat: 34.05448, lng: -117.76169 },
  { lat: 34.05457, lng: -117.76144 },
  { lat: 34.05452, lng: -117.76121 },
  { lat: 34.05435, lng: -117.76163 },
];

const path = './img/';

/**
  * Array of single land marks information.
  * Each element in the array contains the title, description, and icon of a specific landmark.
  * @type {Array<{title: string, description: string, icon: string}>}
  */
export const singleLandMarksInfo = [
  {
    title: 'Butterfly Sanctuary',
    description: '',
    icon: path + 'butterfly.png',
  },
  {
    title: 'Bunnies',
    description:
      'Say hi to Marshmallow, Sprinkles, and Bubblegum! These adorable animals were named by our Junior Farmers and are “hop-py” to see you!',
    icon: path + 'rabbit.png',
  },
  {
    title: 'Goats',
    description: 'Come meet our friendly and fun loving Pygmy goats!',
    icon: path + 'goat.png',
  },
  {
    title: 'Chickens',
    description:
      "Our chicken farm offers fresh eggs on a first come/pay what you can basis. If you're not here for eggs, then say hello to our seven feathered friends.",
    icon: path + 'chicken.png',
  },
  { title: 'Family area', description: '', icon: path + 'family.png' },
  {
    title: 'Outdoor kitchen',
    description: '',
    icon: path + 'outdoor-kitchen.png',
  },
  { title: 'Barn', description: '', icon: path + 'barn.png' },
  {
    title: 'Monkey Puzzle Tree',
    description:
      'Although native to central and southern Chile and western Argentina, this tree, named Araucaria araucana, is right here in Pomona. This endangered species can grow up to 160 feet tall and 8 feet wide. Some can even live for more than 700 years! This tree got its nickname from its rigid pointy leaves and a comment about how difficult it must be for monkeys to climb it',
    icon: path + 'puzzle.png',
  },
  {
    title: 'Evergreen',
    description:
      'This equal access market provides an abundance of nutritious food options, including fruits and vegetables grown right here!',
    icon: path + 'shop.png',
  },
  {
    title: 'Bodega',
    description:
      'Visit our bodega and get yourself; fresh produce, pantry items, hygiene kits, school supplies, books, clothing, preserved foods, and a seed exchange',
    icon: path + 'seating-area.png',
  },
  {
    title: 'Trees',
    description: '',
    icon: path + 'tree.png',
  },
  {
    title: 'Amphitheater',
    description:
      'Come visit during one of our events and you may see live music, dancing, or performances here.',
    icon: path + 'amphitheater.png',
  },
];
