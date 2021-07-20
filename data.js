//    mouse, 0 
//    cow , 1 
//    tiger, 2 
//    rabbit, 3 
//    dragon 4 
//    snake, 5 
//    horse, 6 
//    sheep, 7 
//    monkey, 8 
//    chick, 9 
//    dog, 10 
//    pig, 11 


const qnaList = [
  {
    q: '1. 친구와 함께 여행장소를 정하려는 당신은',
    a: [
      { answer: 'a. 여행은 쉬러가는거지, 힐링여행!', type: [1, 2, 4, 9] },
      { answer: 'b. 평소엔 못가보는곳, 다리가 부러지더라도 스케줄은 꽉꽉채우겠다!', type: [0, 3, 6, 5, 10, 8] },

    ]
  },
  {
    q: '2. 여행 계획을 세우려고 하는데 ',
    a: [
      { answer: 'a. 플랜 a부터 c까지는 있어야 하는거 아냐?', type: [0, 3, 2, 8] },
      { answer: 'b. 물은 물이요 산은 산이요.. 무계획이 계획이다.', type: [1, 6, 5, 10] },
    ]
  },
  {
    q: '3. 여행 날 당일 약속시간에 늦잠을 자버린 친구!, 30분이 늦을것 같다고 하는데,,,',
    a: [
      { answer: 'a. 먼저 연락한것에 감사하며 "야 너두? 야냐두!" 같이 늦는다.', type: [1, 3, 2, 10, 8] },
      { answer: 'b. 화를 삭히며 먼저가서 장을 보고 있겠다고 말한다', type: [7, 9, 11] },
    ]
  },
  {
    q: '4. 혼자만 면허가 있는 친구가 오랜 운전으로 피곤해 할 때',
    a: [
      { answer: 'a. 휴게소까지 몇 km가 남았는지 알아본다 ', type: [1, 2, 4 ] },
      { answer: 'b. 먹을것을 챙겨주며 응원한다 ', type: [7, 10, 8, 9, 11 ] },
    ]
  },
  {
    q: '5. 운전 도중 가벼운 접촉사고가 났다! 이때 당신은',
    a: [
      { answer: 'a. 다음 일정에서도 사고만 생각하며 안절부절한다', type: [1, 7, 10, 4, 9 ] },
      { answer: 'b. 일단 다음 장소를 왔으니 신나게 놀고 생각한다.', type: [0, 3, 6, 11]},
    ]
  },

  {
    q: '6. 숙소에 도착해 짐을 풀었다. 그 다음으로',
    a: [
      { answer: 'a. 1분 1초가 아깝다 바로 놀러 나간다.', type: [4, 9, 11 ] },
      { answer: 'b. 여태 많이 놀아서 지쳤다, 이제 좀 쉬고 싶다', type: [0, 3, 6, 10 ] },
    ]
  },
  {
    q: '7. 물놀이를 하다가 옷이 몽땅 젖어버렸다',
    a: [
      { answer: 'a. 근처에 옷을 파는곳이 있는지 알아본다', type: [1, 7, 11 ] },
      { answer: 'b. 아 이거 어디서 말리지.. 말릴곳을 알아본다', type: [2, 4, 9 ] },
    ]
  },
  {
    q: '8. 여행 도 중 길 잃은 강아지를 발견했다!',
    a: [
      { answer: 'a. 일단 주인을 찾아줘야지! 모든 계획을 멈추고 주인찾기에 열중한다', type: [0, 4, 9 ] },
      { answer: 'b. 다음 여행일정이 잡혀있으니까.. 눈에 밟히지만 길을 나선다', type: [3, 2, 6, 5, 10, 8 ] },
    ]
  },
  {
    q: '9. sns에서 핫한 카페를 찾아갔는데 사람이 너무 많다!',
    a: [
      { answer: 'a. 핫하니까 사람 많은건 당연하다! 사람구경하면서 카페로 들어간다', type: [7, 0, 5, 9 ] },
      { answer: 'b. 벌써부터 스트레스.. 가려던 곳 대신 근처에 한적한 곳을 찾는다', type: [1, 3, 6, 11 ] },
    ]
  },
  {
    q: '10. 캠핑을 하는데 햇반이 하나 남았다. 필요한 인원은 둘! 이때 당신은',
    a: [
      { answer: 'a. 일단 친구에게 햇반을 넘겨주고 고민해본다', type: [4, 9, 11] },
      { answer: 'b. "먼저 잡은건 내꺼지.." 내 몫은 챙기고 친구에게 나눠준다', type: [0, 2, 6, 5 ] },
    ]
  },
  {
    q: '11. 바베큐 예약을 했었는데, 예약이 누락되었다는 사실을 알게되었다! ',
    a: [
      { answer: 'a. 그냥 주변 식당에서 저녁먹어도 상관없지', type: [1, 4, 9, 11 ] },
      { answer: 'b. 아 저녁에 바베큐 먹으려고 생각했는데.. 주인분께 사정해본다', type: [7, 0, 3, 6, 10] },
    ]
  },
  {
    q: '12. 당신은 여행 기념품을 고민중이다. 선물을 고를 때 당신은',
    a: [
      { answer: 'a. 지인에게 딱 필요할만한 실용적인 선물을 찾는다', type: [3, 6, 4, 9 ] },
      { answer: 'b. 선물을 받을 지인이 나를 떠올릴 수 있는 선물을 고민한다', type: [0, 2, 5, 10, 8] },
    ]
  }
]

const infoList = [
  {
    id:'enfp',
    name: '대책없이 신나는 탐험가',
    driven:3,active:1,funny:5,
    desc:'',
    matched:'enfp',unmatched:'isfj'
  },
  {
    id:'enfj',
    name: '난 핸들이 고장난 8톤 트럭',
    driven:3,active:1,funny:5,
    desc:'',
    matched:'enfp',unmatched:'isfj'  },
  {
    id:'entp',
    name: '이 여행에 주인공은 나야!',
    driven:3,active:1,funny:5,
    desc:'',
    matched:'enfp',unmatched:'isfj' 
  },
  {
    id:'entj',
    name: '친구들의 급발진 방지턱',
    driven:3,active:1,funny:5,
    desc:'',
    matched:'enfp',unmatched:'isfj'
  },
  {
    id:'esfp',
    name: '모두 내말에 집중해!',
    driven:3,active:1,funny:5,
    desc:'',
    matched:'enfp',unmatched:'isfj'
  },
  {
    id:'esfj',
    name: '있는거 빼고 다없소',
    driven:3,active:1,funny:5,
    desc:'',
    matched:'enfp',unmatched:'isfj'  
  },
  {    
    id:'estp',
    name: '빵터지는 과자봉지',
    driven:3,active:1,funny:5,
    desc:'',
    matched:'enfp',unmatched:'isfj',
  },
  {    
    id:'estj',
    name: '네비게이션 목소리의 주인공',
    driven:3,active:1,funny:5,
    desc:'',
    matched:'enfp',unmatched:'isfj',
  },
  {    
    id:'infp',
    name: '대책없이 끌려가는 뒷바퀴',
    driven:3,active:1,funny:5,
    desc:'',
    matched:'enfp',unmatched:'isfj',
  },
  {    
    id:'infj',
    name: '자율주행 브레이크',
    driven:3,active:1,funny:5,
    desc:'',
    matched:'enfp',unmatched:'isfj',
  },
  {    
    id:'intp',
    name:'충전이 필요한 스마트폰',
    driven:3,active:1,funny:5,
    desc:'',
    matched:'enfp',unmatched:'isfj',
  },
  {    
    id:'intj',
    name: '장거리에 힘든 계기판',
    driven:3,active:1,funny:5,
    desc:'',
    matched:'enfp',unmatched:'isfj',
  },
  {    
    id:'isfp',
    name: '어리둥절 랜턴',
    driven:3,active:1,funny:5,
    desc:'',
    matched:'enfp',unmatched:'isfj',
  },
  {    
    id:'isfj',
    name: '비가 오~는~날↗️엔↘️ 나를 찾아와',
    driven:3,active:1,funny:5,
    desc:'',
    matched:'enfp',unmatched:'isfj',
  },
  {    
    id:'istp',
    name: '너만 있으면 돼,삼각대',
    driven:3,active:1,funny:5,
    desc:'',
    matched:'enfp',unmatched:'isfj',
  },
  {    
    id:'istj',
    name: '혼자가는 앞바퀴',
    driven:3,active:1,funny:5,
    desc:'',
    matched:'enfp',unmatched:'isfj',
  },

]
