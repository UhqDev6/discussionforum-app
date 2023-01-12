/**
 * test scenario for threadDetail
 *  - should return the initial state when given by unknown action
 *  - should return threadDetail when given RECEIVE_DETAIL_THREADS action
 */

import detailThreadReducer from './reducer';

describe('detailThreadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = detailThreadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return threadDetail when given RECEIVE_DETAIL_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_DETAIL_THREADS',
      payload: {
        detailThread: {
          id: 'thread-B3N9KGa87vfMHyBQ',
          title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu!',
          body: '<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>1. Siapa kamu dan dari mana kamu berasal?</div><div>2. Apa pekerjaan atau pendidikan kamu saat ini?</div><div>3. Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>',
          createdAt: '2022-11-13T09:55:55.353Z',
          owner: {
            id: 'user-6oWew2w2Wx5xLUTU',
            name: 'Dicoding',
            avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
          },
          category: 'introduction',
          comments: [
            {
              id: 'comment-fJ579RDuAsZdB4ER',
              content: 'Halo! Saya Dimas, dari Bandung.<br><br>Saat ini, saya sedang belajar React di Dicoding Academy.',
              createdAt: '2022-11-13T09:57:52.762Z',
              owner: {
                id: 'user-5PqX6Ldhnk_ifroq',
                name: 'Dimas Saputra',
                avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
              },
              upVotesBy: [
                'user-6oWew2w2Wx5xLUTU',
              ],
              downVotesBy: [],
            },
          ],
          upVotesBy: [
            'user-5PqX6Ldhnk_ifroq',
            'user-6oWew2w2Wx5xLUTU',
          ],
          downVotesBy: [],
        },
      },
    };

    // action
    const nextState = detailThreadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.detailThread);
  });
});
