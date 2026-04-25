export interface JournalPost {
  slug: string;
  no: string;
  date: string;
  cat: string;
  title: string;
  read: string;
  body: string[];
  dek?: string;
}

export const POSTS: JournalPost[] = [
  {
    slug: 'j-014-building-inside-other-peoples-buildings',
    no: 'J.014',
    date: 'Apr 18 · 2026',
    cat: 'Field note',
    title: 'On building software inside other people\'s buildings.',
    read: '6 min',
    dek: 'What we\'ve learned from making software for organizations that already have a job.',
    body: [
      'Every client we take on has a job that exists whether or not we show up. The transit workers run buses. The lodge meets. The photographer books shoots. Software is infrastructure — it either gets out of the way or it doesn\'t.',
      'What this means in practice: the best interfaces we\'ve shipped are ones the users don\'t think about. Not "beautiful" in any portfolio sense. Functional in the sense that the job gets done faster, with less friction, with less explanation.',
      'We\'ve learned to start with the existing workflow, not the desired one. Too many studios arrive with an opinion about how the work should be organized. We prefer to watch first. The software that comes out of watching is different from the software that comes out of assumption.',
      'This is what we mean when we say we build from inside the industries we know. Not that we know better. That we\'ve watched long enough to know what to leave alone.',
    ],
  },
  {
    slug: 'j-013-every-project-starts-with-a-conversation',
    no: 'J.013',
    date: 'Mar 22 · 2026',
    cat: 'Process',
    title: 'Why every FutreEng project starts with a conversation, not a brief.',
    read: '4 min',
    dek: 'The brief is what you want. The conversation is what you need.',
    body: [
      'Briefs are documents. They describe a desired outcome in terms the client can defend to their stakeholders. They are not, in our experience, reliable descriptions of the actual job.',
      'We ask for a 30-minute call instead. In that call we\'re listening for the problem behind the problem. The site that needs to be rebuilt is usually covering for a workflow that doesn\'t exist, a team that hasn\'t been hired, or a product that hasn\'t been defined.',
      'This is not a knock on clients. It\'s the nature of the work. You hire a studio because you don\'t know how to get from where you are to where you want to be. The brief is your best guess. The conversation is where we find the truth.',
      'We send a proposal after that call. The proposal describes what we heard, what we think the actual job is, and what it would cost to do it. Sometimes the client says: that\'s not what we asked for. Usually they say: that\'s exactly what we need.',
    ],
  },
  {
    slug: 'j-012-editorial-taste-working-software',
    no: 'J.012',
    date: 'Feb 09 · 2026',
    cat: 'Studio',
    title: 'What we mean when we say "editorial taste" — a working definition.',
    read: '9 min',
    dek: 'A phrase we use. What it actually means.',
    body: [
      '"Editorial taste" is a phrase we use to describe a specific sensibility: that the way something is presented — the type, the hierarchy, the pacing — is itself an argument about what matters.',
      'The magazine that influenced this studio most was the NYRB. Not for its politics, but for the way it treats a long piece of writing as an object worth making carefully. The type choice is a commitment. The margins are a decision.',
      'We carry this into software. The way a form is laid out communicates whether the organization respects the person filling it out. The way a notification arrives communicates urgency or calm. These are not aesthetic choices separate from function. They are function.',
      'Working software is necessary but not sufficient. It also needs to feel like it was made by people who thought about it. That\'s what we mean by editorial taste. Not decoration. Conviction.',
    ],
  },
  {
    slug: 'j-011-aul-14-designing-for-a-160-year-archive',
    no: 'J.011',
    date: 'Jan 14 · 2026',
    cat: 'Case',
    title: 'AUL #14: designing for a 160-year-old archive.',
    read: '12 min',
    dek: 'How we approached a heritage project without making a museum.',
    body: [
      'Adelphic Union Lodge No. 14 was chartered in 1865. The challenge wasn\'t building a website. It was building a website that didn\'t betray 160 years of institutional gravity with a stock template and a "Get Involved" button.',
      'The first thing we did was read. The lodge provided boxes of archival material — printed programs, officer records, photographs from the early 20th century. We spent two weeks in that material before touching a design tool.',
      'What we found: the lodge has always known how to present itself. The printed programs from the 1920s are formally beautiful. They use rules, hierarchy, and weight in ways that feel contemporary. We didn\'t design against that history. We followed it.',
      'The result is a site that feels like it belongs to an institution, not a startup. Heavy serif type. Real photography. A history section that reads like a proper archive, not a timeline widget.',
      'The lesson we take from this project: listen to the institution. The aesthetic is usually already there. Your job is to translate it to the medium, not replace it.',
    ],
  },
];

export function getPostBySlug(slug: string): JournalPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
