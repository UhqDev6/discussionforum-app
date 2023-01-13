/**
 * test scenario for threads thunk function
 *  - thunk function thread
 *  - should dispatch action correctly when user click toggle upVote
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncUpVoteThread, upVoteThreadActionCreator } from './action';

const fakeThreadsResponse = [
  {
    id: 'thread-B3N9KGa87vfMHyBQ',
    title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu!',
    body: '<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>1. Siapa kamu dan dari mana kamu berasal?</div><div>2. Apa pekerjaan atau pendidikan kamu saat ini?</div><div>3. Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>',
    category: 'introduction',
    createdAt: '2022-11-13T09:55:55.353Z',
    ownerId: 'user-6oWew2w2Wx5xLUTU',
    totalComments: 1,
    upVotesBy: [
      'user-5PqX6Ldhnk_ifroq',
      'user-6oWew2w2Wx5xLUTU',
    ],
    downVotesBy: [],
  },
];

describe('asyncUpVoteThread thunk', () => {
  const mockState = {
    authUser: {
      id: 'user-6oWew2w2Wx5xLUTU',
    },
  };

  beforeEach(() => {
    // backup original implementation
    api._upVoteThread = api.upVoteThread;
  });

  afterEach(() => {
    // restore original implementation
    api._upVoteThread = api.upVoteThread;
    // detete backup
    delete api._upVoteThread;
  });

  it('should dispatch action correctly when user click toggle upVote', async () => {
    // arrange
    // stub implementation
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);
    // mock dispatch
    const dispatch = jest.fn();
    const getState = jest.fn(() => mockState);

    // action
    await asyncUpVoteThread('thread-2')(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(upVoteThreadActionCreator({ threadId: 'thread-2', userId: getState().authUser.id }));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
