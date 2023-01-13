/**
 * test scenario for thunk function threadDetail
 *  - thunk functionality threadDetail
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action correctly when data fetching failed
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../utils/api';
import { asyncReceiveThreadDetail, receiveThreadDetailActionCreator } from './action';

const fakeThreadDetailResponse = {
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
};

const fakeErrorResponse = new Error('Ups, somenthing went wrong');

describe('asyncReceiveThreadDetail thunk', () => {
  beforeEach(() => {
    // back up original implementation
    api._getDetailThread = api.getDetailThread;
  });

  afterEach(() => {
    // restore original implementation
    api._getDetailThread = api.getDetailThread;
    // delete back up
    delete api._getDetailThread;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getDetailThread = () => Promise.resolve(fakeThreadDetailResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncReceiveThreadDetail()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch)
      .toHaveBeenCalledWith(receiveThreadDetailActionCreator(fakeThreadDetailResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getDetailThread = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    toast.error = jest.fn();

    // action
    await asyncReceiveThreadDetail()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
