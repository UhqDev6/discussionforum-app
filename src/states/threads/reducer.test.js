/**
 * test scenario for threadsReducer
 *  - should return the initial state when given by unknown action
 *  - should return thread when given RECEIVE_THREADS action
 *  - should return the threads with the new threads when given by ADD_THREADS action
 *  - should test upVote on the thread
 *  - should test downVote on the thread
 *  - should test neutralVote on the thread
 */

import threadsReducer from './reducer';

describe('threadsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];

    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread when given RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-08_nUU2fhu1P5nre',
            title: 'Pengalaman Belajar React di Dicoding',
            body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
            category: 'react',
            createdAt: '2022-11-13T09:59:31.019Z',
            ownerId: 'user-5PqX6Ldhnk_ifroq',
            totalComments: 1,
            upVotesBy: [
              'user-6oWew2w2Wx5xLUTU',
              'user-5PqX6Ldhnk_ifroq',
            ],
            downVotesBy: [
              'user-t2PLqorJ-12i85Y8',
            ],
          },
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
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new threads when given by ADD_THREADS action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Pengalaman Belajar React di Dicoding',
        body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
        category: 'react',
        createdAt: '2022-11-13T09:59:31.019Z',
        ownerId: 'user-5PqX6Ldhnk_ifroq',
        totalComments: 1,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: 'ADD_THREADS',
      payload: {
        threads: {
          id: 'thread-2',
          title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu!',
          body: '<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>1. Siapa kamu dan dari mana kamu berasal?</div><div>2. Apa pekerjaan atau pendidikan kamu saat ini?</div><div>3. Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>',
          category: 'introduction',
          createdAt: '2022-11-13T09:59:31.019Z',
          ownerId: 'user-6oWew2w2Wx5xLUTU',
          totalComments: 1,
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should test upVote on the thread', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Pengalaman Belajar React di Dicoding',
        body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
        category: 'react',
        createdAt: '2022-11-13T09:59:31.019Z',
        ownerId: 'user-5PqX6Ldhnk_ifroq',
        totalComments: 1,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: 'UP_VOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
        downVotesBy: [],
      },
    ]);
  });

  it('should test downVote on the thread', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Pengalaman Belajar React di Dicoding',
        body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
        category: 'react',
        createdAt: '2022-11-13T09:59:31.019Z',
        ownerId: 'user-5PqX6Ldhnk_ifroq',
        totalComments: 1,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: 'DOWN_VOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
        upVotesBy: [],
      },
    ]);
  });

  it('should test neutralVote on the thread', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Pengalaman Belajar React di Dicoding',
        body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
        category: 'react',
        createdAt: '2022-11-13T09:59:31.019Z',
        ownerId: 'user-5PqX6Ldhnk_ifroq',
        totalComments: 1,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: 'NEUTRALIZE_VOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [],
      },
    ]);
  });
});
