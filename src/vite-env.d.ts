/// <reference types="vite/client" />
import { ActionCreatorWithPayload, AnyAction } from '@reduxjs/toolkit';
import { FocusEvent, ReactNode } from 'react';

type BlurEvent = FocusEvent<HTMLInputElement>;

interface Desc {
  heading?: string;
  placeholder?: string;
  contents: string[];
}

// <actions>
interface StringValueAction {
  id: string;
  content: string;
}
interface DescContentAction {
  id: string;
  descId: number;
  content: string;
}
// <actions />

interface Ui {
  theme: string;
  spellCheck: boolean;
  screen: 'resume' | 'templates' | 'edit';
  fontSize: 'medium' | 'small' | 'large';
  isResumeBlank: boolean;
  listStyle: string;
  focused: boolean;
  showTools: boolean;
}

interface State {
  beingUsed: boolean;
  heading: string;
}

// interface ExperienceState extends State {
//   data: {
//     [id: string]: {
//       primary: string;
//       secondary: string;
//       from: string;
//       to: string;
//       location: string;
//       description: { heading: string; contents: string[] };
//     };
//   };
//   order: [string];
// }

interface AchievementState extends State {
  data: {
    [id: string]: {
      achievement: string;
      when: string;
      description: string;
    };
  };
  order: [string];
}

// interface EducationState extends State {
//   data: {
//     [id: string]: {
//       primary: string;
//       secondary: string;
//       from: string;
//       to: string;
//       location: string;
//       description: { heading: string; contents: string[] };
//     };
//   };
//   order: [string];
// }

interface LongDetailState extends State {
  data: {
    [id: string]: {
      primary: string;
      secondary?: string;
      from: string;
      to: string;
      location?: string;
      description: { heading: string; contents: string[] };
    };
  };
  order: [string];
}

interface SkillState extends State {
  data: [string];
}

interface ReferenceState extends State {
  data: [
    {
      person: string;
      contact: string;
    }
  ];
}

interface SectionHeading {
  content: string;
  placeholder: string;
  beingUsed: boolean;
  setBeingUsed: ActionCreatorWithPayload<boolean, string>;
  setHeading: ActionCreatorWithPayload<string, string>;
}

// interface ShortDetail {
//   heading: string;
//   placeholder: string;
// }

// interface FromToLocation {
//   id: string;
//   from: {
//     content: string;
//     change: ActionCreatorWithPayload<StringValueAction, string>;
//   };
//   to: {
//     content: string;
//     change: ActionCreatorWithPayload<StringValueAction, string>;
//   };
//   location: {
//     content: string;
//     change: ActionCreatorWithPayload<StringValueAction, string>;
//   };
// }

// interface LongDetail {
//   id: string;
//   primary: {
//     heading: string;
//     placeholder: string;
//     change: ActionCreatorWithPayload<StringValueAction, string>;
//   };
//   secondary: {
//     heading: string;
//     placeholder: string;
//     change: ActionCreatorWithPayload<StringValueAction, string>;
//   };
//   description: {
//     heading: string;
//     placeholder: string;
//     contents: string[];
//     setHeading: ActionCreatorWithPayload<StringValueAction, string>;
//     setContent: ActionCreatorWithPayload<DescContentAction, string>;
//     create: ActionCreatorWithPayload<{ id: string }, string>;
//   };
//   periodAndLocation: ReactNode;
// }

// interface MediumDetail {
//   description: Desc;
// }

interface PublicationState extends State {
  data: {
    [id: string]: {
      publication: string;
      description: string;
    };
  };
  order: [string];
}

interface LanguageState extends State {
  data: [
    {
      language: string;
      fluency: 1 | 2 | 3 | 4 | 5;
    }
  ];
}

interface InterestState extends State {
  data: [string];
}

interface AwardState extends State {
  data: {
    [id: string]: {
      award: string;
      when: string;
      description: string;
    };
  };
  order: [string];
}

interface OrganizationState extends State {
  data: {
    [id: string]: {
      primary: string;
      from: string;
      to: string;
      description: string;
    };
  };
  order: [string];
}

// interface VolunteerState extends State {
//   data: {
//     [id: string]: {
//       primary: string;
//       secondary: string;
//       from: string;
//       to: string;
//       location: string;
//       description: { heading: string; contents: string[] };
//     };
//   };
//   order: [string];
// }