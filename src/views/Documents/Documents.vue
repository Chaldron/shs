<template>
  <div>
    <plain-header title="Documents" />
    <card-container>
      <!-- Class cards -->
      <documents-card
        v-for="(list, name) in docs"
        :key="name"
        :class-name="name"
        :documents="list"
      />
      <!-- Request card -->
      <form-card :name="formName" title="Request">
        <form-card-element style="margin-bottom:-5px">
          Didn't find the book you were looking for? Request it below!
        </form-card-element>
        <form-card-element>
          <label>Class</label>
          <input
            type="text"
            name="class-name"
            placeholder="Underwater Basket Weaving Accelerated"
            required
          />
        </form-card-element>
        <form-card-element>
          <label>Title</label>
          <input
            type="text"
            name="document-name"
            placeholder="Pine Needle Basketry: From Forest Floor to Finished Project"
            required
          />
        </form-card-element>
        <form-card-element>
          <label>Author(s)</label>
          <input
            type="text"
            name="document-author"
            placeholder="Judy Mallow"
            required
          />
        </form-card-element>
        <form-card-element>
          <label>Edition</label>
          <input
            type="text"
            name="document-edition"
            placeholder="1st"
          />
        </form-card-element>
        <form-card-element>
          <label>Contact</label>
          <p style="font-size:14px; margin-top:-3px; margin-left: -5px; color:grey">
            You can optionally provide your email if you wish to be
            notified when your book has been added.
          </p>
          <input
            type="email"
            name="contact-address"
            placeholder="your@email.com"
          />
        </form-card-element>
        <form-card-element submit>
          <rounded-button text="Submit" />
        </form-card-element>
      </form-card>
      <br>
    </card-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CardContainer from '@/components/CardContainer.vue';
import DocumentsCard from '@/components/cards/DocumentsCard.vue';
import PlainHeader from '@/components/PlainHeader.vue';
import FormCard from '@/components/cards/FormCard.vue';
import FormCardElement from '@/components/cards/FormCardElement.vue';
import RoundedButton from '@/components/RoundedButton.vue';

export default {
  components: {
    CardContainer,
    DocumentsCard,
    PlainHeader,
    FormCard,
    FormCardElement,
    RoundedButton,
  },
  data() {
    return {
      docs: {
        'Spanish 1': [
          {
            title: 'Textbook',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2elFIbHBLRHV6MGs',
          },
          {
            title: 'Core Workbook 1-5',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2Nk1MWFdnWTNXWTA',
          },
          {
            title: 'Core Workbook 6-10',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2TEx2OXNrRzJja2s',
          },
        ],
        'Spanish 2-3x': [
          {
            title: 'Textbook',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2QjZRTFpiNS0xWXc',
          },
          {
            title: 'Guided Practice',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2SUQzTUJCaGt6cW8',
          },
          {
            title: 'Core Workbook 1-5',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2U1Nrc2JVLVR6OFE',
          },
          {
            title: 'Core Workbook 6-10',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2NlA1MVlYUEhLY2c',
          },
        ],
        'Spanish 3-4x': [
          {
            title: 'Core Workbook 1-5',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2Zk4tQlBqajZvRnM',
          },
          {
            title: 'Core Workbook 6-10',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2dlVIRGs3TGYyVWs',
          },
        ],
        'Freshman English Accelerated': [
          {
            title: 'A Tale of Two Cities',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2Qzdib0pUTVlycTg',
          },
          {
            title: 'Lord of the Flies',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2ODFuOTRRR0ZhQlE',
          },
          {
            title: 'Of Mice and Men',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2cURIQ1oya0haN1k',
          },
          {
            title: 'The Alchemist',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2MnUtSktROUQ0amc',
          },
          {
            title: 'The Color of Water',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2TUlUblltT0VsQms',
          },
          {
            title: 'The Tempest',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2dWM0U2lMTWJqeFU',
          },
          {
            title: 'To Kill a Mockingbird',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2ZzNtRlhmVDl0c00',
          },
          {
            title: 'The House on Mango Street',
            link:
              'https://mega.nz/#!9YlnhJBA!WZYibrhIlh7LsQ2TOQWoToEL3GDmfzSIKkA_nIHj-20',
          },
        ],
        'Sophomore Accelerated English': [
          {
            title: 'The Bean Trees',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2M0FwbERsOERnWTg',
          },
          {
            title: 'The Catcher in the Rye',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2LVhRaV9TOUlTa2M',
          },
          {
            title: 'Fahrenheit 451',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2TG80VnM0UjhCb1k',
          },
          {
            title: 'Macbeth',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2TFpndGZpMEtEa1U',
          },
          {
            title: 'Jane Eyre',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2MVlnd1JQTTNwajQ',
          },
        ],
        'AP Junior English': [
          {
            title: 'The Picture of Dorian Gray',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2YnlMYUloeDh3N0k',
          },
          {
            title: 'They Say I Say',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2N294eW5uM1RibFE',
          },
          {
            title: 'On Writing Well',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2ajJFanh6RU15M1k',
          },
          {
            title: 'Othello',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2Y3N5VjNpZGsxUFU',
          },
          {
            title: 'The Great Gatsby',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2dWZrcmkzQlRnNXM',
          },
          {
            title: 'Status Anxiety',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2YkgyRzRBQnpVVWM',
          },
        ],
        'AP Themes': [
          {
            title: 'Life of Pi',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2ejA1RVRHS200bzA',
          },
          {
            title: 'Balzac and the Little Chinese Seamstress',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2Z1pxejVXVVhxaWc',
          },
          {
            title: 'The Stranger',
            link:
              'https://mega.nz/#!RB9jVYRR!d2_thGqn6ZuhjCr1_Xcq0_v_sNve7gbhAnXOmMxnjKs',
          },
          {
            title: 'The White TIger',
            link:
              'https://mega.nz/file/8NFSWLLC#SEhMJ9n-qWpJh7FbVXckZYCrApXZCri5dwB8d_KZMUA',
          },
          {
            title: 'Barbara Kingsolver - The Poisonwood Bible',
            link: 'https://mega.nz/file/pNFGjTgY#fEG0V_zdYVm3r2alTOG7GbX2X4v5OXCvXl_7UfGGc1I',
          },
        ],
        'Geometry Honors': [
          {
            title: 'Textbook',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2N29iUHZWZXc2MUE',
          },
        ],
        'Precalculus Honors': [
          {
            title: 'Textbook',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2aEJhdHhyZkk0eEE',
          },
        ],
        'AP Calculus AB': [
          {
            title: 'Textbook',
            link:
              'https://mega.nz/#!kNFE2Kpa!Q55iKU7lDkwRWIjwXmbTfBdIap9ajeA7-Gg7bmrF4VM',
          },
        ],
        'AP Calculus BC': [
          {
            title: 'Textbook',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2djdFZmZPbVFKcGM',
          },
        ],
        'AP Statistics': [
          {
            title: 'Textbook',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2U25YMUNtZFFOUkU',
          },
        ],
        'Calculus III': [
          {
            title: 'Textbook',
            link:
              'https://mega.nz/#!pBFSHKIK!sjHXYpUlR03mbEXRTOjn_kMKjn5Skaupv3QXmpPHK6E',
          },
        ],
        'Linear Algebra': [
          {
            title: 'Textbook',
            link:
              'https://mega.nz/#!4FVwzIhS!fYLoya-XEe7ej7e-iFMUKJMYc8sheJv4OlhT01rJ9P0',
          },
        ],
        'AP Computer Science': [
          {
            title: 'Textbook',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2QzExelNFZ1Y1N0k',
          },
        ],
        'AP Physics 1': [
          {
            title: 'Textbook',
            link:
              'https://mega.nz/#!8UdQBQKJ!mImb8Fsk09V9YGeRRaqx9FePTgP58jWeOnE27IbQCjk',
          },
        ],
        'AP Physics 2': [
          {
            title: 'Textbook',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2am5rTGlKaFVoT1E',
          },
        ],
        'AP Physics C': [
          {
            title: 'University Physics with Modern Physics',
            link:
              'https://mega.nz/file/YQsFBQDZ#RBbv8lY3W5zmRWml4izso4Ht3hvIs0DFP7d69HVgpqw',
          },
        ],
        'AP Chemistry': [
          {
            title: 'Textbook',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2bTByMklUcDYyM1E',
          },
        ],
        'AP Biology': [
          {
            title: 'Textbook',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2N2JJbS1PTnpucUk',
          },
        ],
        'AP Government': [
          {
            title: 'American Government Stories of a Nation',
            link: 'https://mega.nz/file/QRl2HISb#PhAK5VKxrzgk5f6jJ_45RlwNc9XnRWipq1SxiyqUgvs',
          },
        ],
        'AP Macroeconomics': [
          {
            title: 'Textbook',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2RFJ3Z0pNQXFtU2s',
          },
        ],
        'AP Microeconomics': [
          {
            title: 'Principles of Economics (2nd Ed.)',
            link:
              'https://mega.nz/file/kUdyGQqB#N4LN8FGEwa13Ny2ZyDNAOxed-AHjD-hW9ZsYgs-CvYI',
          },
        ],
        'AP European History': [
          {
            title: 'McKay Textbook',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2bUdwVUtOU1h1Y1U',
          },
        ],
        'APUSH, AP American Studies': [
          {
            title: '(Old?) Textbook - APUSH/AMSTUD',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2a0ZZYWVpUjd4QmM',
          },
          {
            title: '(Old?) Textbook - AMSTUD (Conversations)',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2YmJCR0dWRDQ4LXc',
          },
          {
            title: "It's complicated",
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2cHBPWlFDbWh1WEk',
          },
          {
            title: 'Give Me Liberty! An American History - 6e Volume 1',
            link: 'https://mega.nz/file/4dEBGSgT#YKmJMBWco5ilcNrolu6JMVxDcDiH2nrWtWrRFwXoVsk',
          },
          {
            title: 'Give Me Liberty! An American History - 6e Volume 2',
            link: 'https://mega.nz/file/MYFTkKaZ#zOxbAV3f81FTPGfbufyEta2kyKeBJw8TKbfr0yl7kZY',
          },
          {
            title: 'Give Me Liberty! An American History (Brief Edition) - 5e Volume 1',
            link: 'https://mega.nz/file/sJUjTSDD#vaNf7zksQxSQM7N_dnIW8dt5vtb5jtyPqEphTE3iYLE',
          },
          {
            title: 'Give Me Liberty! An American History (Brief Edition) - 5e Volume 2',
            link: 'https://mega.nz/file/QZVjlYrb#BL3EF4nVClnMe7aMHUDLciunrl8OxKhG5HkktFTZzNA',
          },

        ],
        'AP Psychology': [
          {
            title: 'Textbook',
            link:
              'https://drive.google.com/uc?export=download&id=0B5BsvXoCCrj2X2RrT3NFMEN1OHc',
          },
        ],
        'Math Team': [
          {
            title: "Comap - For All Practical Purposes Mathematical Literacy in Today's World - WH Freeman (2015)",
            link: 'https://mega.nz/file/cdcQgBbD#qZIJY6R7qf5p12FlMeeTA5hNiKGTVToOZOLHT4u8g64',
          },
          {
            title: 'David Patrick - Intermediate Counting and Probability (the essential parts) (The Art of Problem Solving) (2007)',
            link: 'https://mega.nz/file/dddQTRRb#QRuK2EwvQEMcd4aU2PRg-9EKGXMaxws4iup33ztEEnk',
          },
          {
            title: 'David Patrick and Naoki Sato - Intermediate Counting and Probability (Solution Manual) (The Art of Problem Solving)',
            link: 'https://mega.nz/file/hBVASTYQ#hrbTGJxtChYfFjteNeDxviqZ3s3VA8eYKQoDx13dDbM',
          },
          {
            title: 'Taxicab Geometry - An adventure in non-Euclidean geometry',
            link: 'https://mega.nz/file/IJEQibLL#ndqOUI5CrQhqC0JPqELzN4367cr_b3D14i_ZTBUFzJ0',
          },
          {
            title: 'Richard Rusczyk and Mathew Crawford - Art of Problem Solving - Intermediate Algebra',
            link: 'https://mega.nz/file/NEcWnZaZ#BK-haz-o5F-hmJypxNNJUYB8a833NC1RpXvqGtgjX3s',
          },
        ],
      },
      formName: 'document-request',
    };
  },
  methods: {},
};
</script>

<style lang="sass" scoped></style>
