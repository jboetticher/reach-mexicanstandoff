// Automatically generated with Reach 0.1.3
/* eslint-disable */
export const _version = '0.1.3';
export const _backendVersion = 1;


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      }
    };
  
  };

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };

export async function Alice(ctc, interact) {
  if (ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc1]);
  const ctc5 = stdlib.T_Tuple([ctc1, ctc0, ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc7 = stdlib.T_Digest;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1, ctc1, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc0, ctc0, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0]);
  
  
  const v22 = await ctc.creationTime();
  const v18 = stdlib.protect(ctc0, interact.getDonationAddress, 'for Alice\'s interact field getDonationAddress');
  const v19 = stdlib.protect(ctc1, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v22, v19, v18],
    evt_cnt: 2,
    funcNum: 1,
    hasLastTime: stdlib.checkedBigNumberify('./index.rsh:49:5:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc1, ctc0],
    pay: [v19, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:49:5:dot', stdlib.UInt_max, 0), v22]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:49:5:dot', stdlib.UInt_max, 0)]);
      const [v27, v28] = txn1.data;
      const v31 = txn1.time;
      const v26 = txn1.from;
      
      sim_r.txns.push({
        amt: v27,
        kind: 'to',
        tok: undefined
        });
      sim_r.nextSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:50:11:after expr stmt semicolon', stdlib.UInt_max, 1), v26, v27, v28, v31]);
      sim_r.nextSt_noTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:50:11:after expr stmt semicolon', stdlib.UInt_max, 1), v26, v27, v28]);
      sim_r.view = [ctc10, [stdlib.checkedBigNumberify('./index.rsh:50:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeout_delay: false,
    tys: [ctc1, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const [v27, v28] = txn1.data;
  const v31 = txn1.time;
  const v26 = txn1.from;
  ;
  const txn2 = await (ctc.recv({
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v26, v27, v28, v31],
      evt_cnt: 0,
      funcNum: 3,
      hasLastTime: stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 3),
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v26, v27, v28, v31]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v26, v27, v28]);
        const [] = txn3.data;
        const v361 = txn3.time;
        const v358 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v360 = stdlib.addressEq(v26, v358);
        stdlib.assert(v360, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:58:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        sim_r.txns.push({
          amt: v27,
          kind: 'from',
          to: v26,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.nextSt = stdlib.digest(ctc3, []);
        sim_r.nextSt_noTime = stdlib.digest(ctc3, []);
        sim_r.view = [ctc3, []];
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeout_delay: false,
      tys: [ctc0, ctc1, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    const [] = txn3.data;
    const v361 = txn3.time;
    const v358 = txn3.from;
    ;
    const v360 = stdlib.addressEq(v26, v358);
    stdlib.assert(v360, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:58:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:41:51:application',
      fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:58:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    }
  else {
    const [v36] = txn2.data;
    const v39 = txn2.time;
    const v35 = txn2.from;
    const v38 = stdlib.add(v27, v27);
    ;
    const txn3 = await (ctc.recv({
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc0],
      timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        evt_cnt: 0,
        funcNum: 5,
        out_tys: [],
        timeout_delay: false,
        waitIfNotPresent: false
        }));
      const [] = txn4.data;
      const v339 = txn4.time;
      const v336 = txn4.from;
      ;
      const v338 = stdlib.addressEq(v35, v336);
      stdlib.assert(v338, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:69:14:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:41:51:application',
        fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:69:14:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      }
    else {
      const [v44] = txn3.data;
      const v47 = txn3.time;
      const v43 = txn3.from;
      const v46 = stdlib.add(v38, v27);
      ;
      const v49 = stdlib.addressEq(v28, v36);
      const v55 = stdlib.addressEq(v28, v44);
      const v57 = v55 ? false : true;
      const v60 = v49 ? v57 : true;
      if (v60) {
        const txn4 = await (ctc.sendrecv({
          args: [v26, v46, v47],
          evt_cnt: 0,
          funcNum: 6,
          hasLastTime: stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2),
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 5), v26, v46, v47]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 5), v26, v46]);
            const [] = txn4.data;
            const v65 = txn4.time;
            const v62 = txn4.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v64 = stdlib.addressEq(v26, v62);
            stdlib.assert(v64, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:75:12:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            sim_r.txns.push({
              amt: v46,
              kind: 'from',
              to: v26,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc3, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc3, []);
            sim_r.view = [ctc3, []];
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: true,
          timeout_delay: false,
          tys: [ctc0, ctc1, ctc1],
          waitIfNotPresent: false
          }));
        const [] = txn4.data;
        const v65 = txn4.time;
        const v62 = txn4.from;
        ;
        const v64 = stdlib.addressEq(v26, v62);
        stdlib.assert(v64, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:75:12:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:41:51:application',
          fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:75:12:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        }
      else {
        const v86 = stdlib.protect(ctc1, await interact.getPlayerToShoot(), {
          at: './index.rsh:85:46:application',
          fs: ['at ./index.rsh:84:9:application call to [unknown function] (defined at: ./index.rsh:84:13:function exp)'],
          msg: 'getPlayerToShoot',
          who: 'Alice'
          });
        const v88 = stdlib.protect(ctc1, await interact.random(), {
          at: 'reach standard library:60:31:application',
          fs: ['at ./index.rsh:86:46:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:84:9:application call to [unknown function] (defined at: ./index.rsh:84:13:function exp)'],
          msg: 'random',
          who: 'Alice'
          });
        const v89 = stdlib.digest(ctc6, [v88, v86]);
        
        const txn4 = await (ctc.sendrecv({
          args: [v26, v27, v28, v35, v43, v46, v47, v89],
          evt_cnt: 1,
          funcNum: 7,
          hasLastTime: stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, 6),
          onlyIf: true,
          out_tys: [ctc7],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, 7), v26, v27, v28, v35, v43, v46, v47]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, 7), v26, v27, v28, v35, v43, v46]);
            const [v92] = txn4.data;
            const v95 = txn4.time;
            const v91 = txn4.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v94 = stdlib.addressEq(v26, v91);
            stdlib.assert(v94, {
              at: './index.rsh:89:5:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:92:11:after expr stmt semicolon', stdlib.UInt_max, 9), v26, v27, v28, v35, v43, v46, v95]);
            sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:92:11:after expr stmt semicolon', stdlib.UInt_max, 9), v26, v27, v28, v35, v43, v46]);
            sim_r.view = [ctc10, [stdlib.checkedBigNumberify('./index.rsh:92:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
          tys: [ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1, ctc7],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.recv({
            evt_cnt: 0,
            funcNum: 8,
            out_tys: [],
            timeout_delay: false,
            waitIfNotPresent: false
            }));
          const [] = txn5.data;
          const v317 = txn5.time;
          const v314 = txn5.from;
          ;
          const v316 = stdlib.addressEq(v35, v314);
          stdlib.assert(v316, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:91:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:41:51:application',
            fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:91:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          }
        else {
          const [v92] = txn4.data;
          const v95 = txn4.time;
          const v91 = txn4.from;
          ;
          const v94 = stdlib.addressEq(v26, v91);
          stdlib.assert(v94, {
            at: './index.rsh:89:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const txn5 = await (ctc.recv({
            evt_cnt: 1,
            funcNum: 9,
            out_tys: [ctc7],
            timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.recv({
              evt_cnt: 0,
              funcNum: 10,
              out_tys: [],
              timeout_delay: false,
              waitIfNotPresent: false
              }));
            const [] = txn6.data;
            const v295 = txn6.time;
            const v292 = txn6.from;
            ;
            const v294 = stdlib.addressEq(v43, v292);
            stdlib.assert(v294, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:104:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:41:51:application',
              fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:104:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            }
          else {
            const [v105] = txn5.data;
            const v108 = txn5.time;
            const v104 = txn5.from;
            ;
            const v107 = stdlib.addressEq(v35, v104);
            stdlib.assert(v107, {
              at: './index.rsh:102:5:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const txn6 = await (ctc.recv({
              evt_cnt: 1,
              funcNum: 11,
              out_tys: [ctc1],
              timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv({
                args: [v26, v27, v28, v35, v43, v46, v108],
                evt_cnt: 0,
                funcNum: 12,
                hasLastTime: stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6),
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 11), v26, v27, v28, v35, v43, v46, v108]);
                  sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 11), v26, v27, v28, v35, v43, v46]);
                  const [] = txn7.data;
                  const v273 = txn7.time;
                  const v270 = txn7.from;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v272 = stdlib.addressEq(v26, v270);
                  stdlib.assert(v272, {
                    at: 'reach standard library:209:7:dot',
                    fs: ['at ./index.rsh:115:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  sim_r.txns.push({
                    amt: v46,
                    kind: 'from',
                    to: v26,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.nextSt = stdlib.digest(ctc3, []);
                  sim_r.nextSt_noTime = stdlib.digest(ctc3, []);
                  sim_r.view = [ctc3, []];
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeout_delay: false,
                tys: [ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1],
                waitIfNotPresent: false
                }));
              const [] = txn7.data;
              const v273 = txn7.time;
              const v270 = txn7.from;
              ;
              const v272 = stdlib.addressEq(v26, v270);
              stdlib.assert(v272, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:115:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc2, await interact.informTimeout(), {
                at: './index.rsh:41:51:application',
                fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:115:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              }
            else {
              const [v114] = txn6.data;
              const v117 = txn6.time;
              const v113 = txn6.from;
              ;
              const v116 = stdlib.addressEq(v43, v113);
              stdlib.assert(v116, {
                at: './index.rsh:113:5:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const txn7 = await (ctc.sendrecv({
                args: [v26, v27, v28, v35, v43, v46, v114, v117, v88, v86],
                evt_cnt: 2,
                funcNum: 13,
                hasLastTime: stdlib.checkedBigNumberify('./index.rsh:122:5:dot', stdlib.UInt_max, 7),
                onlyIf: true,
                out_tys: [ctc1, ctc1],
                pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:122:5:dot', stdlib.UInt_max, 13), v26, v27, v28, v35, v43, v46, v114, v117]);
                  sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:122:5:dot', stdlib.UInt_max, 13), v26, v27, v28, v35, v43, v46, v114]);
                  const [v122, v123] = txn7.data;
                  const v126 = txn7.time;
                  const v121 = txn7.from;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v125 = stdlib.addressEq(v26, v121);
                  stdlib.assert(v125, {
                    at: './index.rsh:122:5:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:125:11:after expr stmt semicolon', stdlib.UInt_max, 15), v26, v27, v28, v35, v43, v46, v114, v123, v126]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:125:11:after expr stmt semicolon', stdlib.UInt_max, 15), v26, v27, v28, v35, v43, v46, v114, v123]);
                  sim_r.view = [ctc10, [stdlib.checkedBigNumberify('./index.rsh:125:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                  sim_r.isHalt = false;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
                tys: [ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
                waitIfNotPresent: false
                }));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.recv({
                  evt_cnt: 0,
                  funcNum: 14,
                  out_tys: [],
                  timeout_delay: false,
                  waitIfNotPresent: false
                  }));
                const [] = txn8.data;
                const v251 = txn8.time;
                const v248 = txn8.from;
                ;
                const v250 = stdlib.addressEq(v43, v248);
                stdlib.assert(v250, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./index.rsh:124:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                ;
                stdlib.protect(ctc2, await interact.informTimeout(), {
                  at: './index.rsh:41:51:application',
                  fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:124:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Alice'
                  });
                
                return;
                }
              else {
                const [v122, v123] = txn7.data;
                const v126 = txn7.time;
                const v121 = txn7.from;
                ;
                const v125 = stdlib.addressEq(v26, v121);
                stdlib.assert(v125, {
                  at: './index.rsh:122:5:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                const txn8 = await (ctc.recv({
                  evt_cnt: 2,
                  funcNum: 15,
                  out_tys: [ctc1, ctc1],
                  timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
                  waitIfNotPresent: false
                  }));
                if (txn8.didTimeout) {
                  const txn9 = await (ctc.sendrecv({
                    args: [v26, v27, v28, v35, v43, v46, v114, v123, v126],
                    evt_cnt: 0,
                    funcNum: 16,
                    hasLastTime: stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8),
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
                    sim_p: (async (txn9) => {
                      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                      
                      sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 15), v26, v27, v28, v35, v43, v46, v114, v123, v126]);
                      sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 15), v26, v27, v28, v35, v43, v46, v114, v123]);
                      const [] = txn9.data;
                      const v229 = txn9.time;
                      const v226 = txn9.from;
                      
                      sim_r.txns.push({
                        amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                        kind: 'to',
                        tok: undefined
                        });
                      const v228 = stdlib.addressEq(v26, v226);
                      stdlib.assert(v228, {
                        at: 'reach standard library:209:7:dot',
                        fs: ['at ./index.rsh:133:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                        msg: 'sender correct',
                        who: 'Alice'
                        });
                      sim_r.txns.push({
                        amt: v46,
                        kind: 'from',
                        to: v26,
                        tok: undefined
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined
                        })
                      sim_r.nextSt = stdlib.digest(ctc3, []);
                      sim_r.nextSt_noTime = stdlib.digest(ctc3, []);
                      sim_r.view = [ctc3, []];
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: true,
                    timeout_delay: false,
                    tys: [ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1, ctc1, ctc1],
                    waitIfNotPresent: false
                    }));
                  const [] = txn9.data;
                  const v229 = txn9.time;
                  const v226 = txn9.from;
                  ;
                  const v228 = stdlib.addressEq(v26, v226);
                  stdlib.assert(v228, {
                    at: 'reach standard library:209:7:dot',
                    fs: ['at ./index.rsh:133:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  ;
                  stdlib.protect(ctc2, await interact.informTimeout(), {
                    at: './index.rsh:41:51:application',
                    fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:133:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Alice'
                    });
                  
                  return;
                  }
                else {
                  const [v131, v132] = txn8.data;
                  const v135 = txn8.time;
                  const v130 = txn8.from;
                  ;
                  const v134 = stdlib.addressEq(v35, v130);
                  stdlib.assert(v134, {
                    at: './index.rsh:131:5:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  const v136 = stdlib.mod(v123, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                  const v137 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:136:40:decimal', stdlib.UInt_max, 0));
                  const v138 = stdlib.mod(v132, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                  const v139 = stdlib.eq(v138, stdlib.checkedBigNumberify('./index.rsh:136:71:decimal', stdlib.UInt_max, 0));
                  const v140 = stdlib.mod(v114, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                  const v141 = stdlib.eq(v140, stdlib.checkedBigNumberify('./index.rsh:136:98:decimal', stdlib.UInt_max, 0));
                  const v142 = v139 ? true : v141;
                  const v143 = v142 ? stdlib.checkedBigNumberify('./index.rsh:136:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:136:107:decimal', stdlib.UInt_max, 1);
                  const v144 = v137 ? stdlib.checkedBigNumberify('./index.rsh:136:44:decimal', stdlib.UInt_max, 0) : v143;
                  const v146 = stdlib.eq(v138, stdlib.checkedBigNumberify('./index.rsh:137:40:decimal', stdlib.UInt_max, 1));
                  const v148 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:137:71:decimal', stdlib.UInt_max, 1));
                  const v150 = stdlib.eq(v140, stdlib.checkedBigNumberify('./index.rsh:137:98:decimal', stdlib.UInt_max, 1));
                  const v151 = v148 ? true : v150;
                  const v152 = v151 ? stdlib.checkedBigNumberify('./index.rsh:137:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:137:107:decimal', stdlib.UInt_max, 1);
                  const v153 = v146 ? stdlib.checkedBigNumberify('./index.rsh:137:44:decimal', stdlib.UInt_max, 0) : v152;
                  const v155 = stdlib.eq(v140, stdlib.checkedBigNumberify('./index.rsh:138:40:decimal', stdlib.UInt_max, 2));
                  const v157 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:138:71:decimal', stdlib.UInt_max, 2));
                  const v159 = stdlib.eq(v138, stdlib.checkedBigNumberify('./index.rsh:138:98:decimal', stdlib.UInt_max, 2));
                  const v160 = v157 ? true : v159;
                  const v161 = v160 ? stdlib.checkedBigNumberify('./index.rsh:138:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:138:107:decimal', stdlib.UInt_max, 1);
                  const v162 = v155 ? stdlib.checkedBigNumberify('./index.rsh:138:44:decimal', stdlib.UInt_max, 0) : v161;
                  const v163 = stdlib.add(v144, v153);
                  const v164 = stdlib.add(v163, v162);
                  const v169 = stdlib.eq(v144, stdlib.checkedBigNumberify('./index.rsh:146:20:decimal', stdlib.UInt_max, 0));
                  const v170 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:146:37:decimal', stdlib.UInt_max, 0));
                  const v171 = stdlib.eq(v162, stdlib.checkedBigNumberify('./index.rsh:146:50:decimal', stdlib.UInt_max, 0));
                  const v172 = v170 ? v171 : false;
                  const v173 = stdlib.mul(v27, stdlib.checkedBigNumberify('./index.rsh:146:63:decimal', stdlib.UInt_max, 2));
                  const v174 = v172 ? v173 : v27;
                  const v175 = v169 ? stdlib.checkedBigNumberify('./index.rsh:146:24:decimal', stdlib.UInt_max, 0) : v174;
                  ;
                  const v183 = v169 ? v171 : false;
                  const v185 = v183 ? v173 : v27;
                  const v186 = v170 ? stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0) : v185;
                  ;
                  const v194 = v169 ? v170 : false;
                  const v196 = v194 ? v173 : v27;
                  const v197 = v171 ? stdlib.checkedBigNumberify('./index.rsh:148:24:decimal', stdlib.UInt_max, 0) : v196;
                  ;
                  const v202 = stdlib.eq(v164, stdlib.checkedBigNumberify('./index.rsh:149:27:decimal', stdlib.UInt_max, 0));
                  const v203 = stdlib.mul(v27, stdlib.checkedBigNumberify('./index.rsh:149:39:decimal', stdlib.UInt_max, 3));
                  const v204 = v202 ? v203 : v27;
                  ;
                  const v212 = [v144, v123, v153, v132, v162, v114];
                  stdlib.protect(ctc2, await interact.seeOutcome(v212), {
                    at: './index.rsh:153:24:application',
                    fs: ['at ./index.rsh:152:7:application call to [unknown function] (defined at: ./index.rsh:152:22:function exp)'],
                    msg: 'seeOutcome',
                    who: 'Alice'
                    });
                  
                  return;}
                }
              }
            }
          }
        }}
    }
  
  
  };
export async function Bob(ctc, interact) {
  if (ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1, ctc1, ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc0, ctc0, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0]);
  
  
  const v22 = await ctc.creationTime();
  const v20 = stdlib.protect(ctc0, interact.getDonationAddress, 'for Bob\'s interact field getDonationAddress');
  
  const txn1 = await (ctc.recv({
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc1, ctc0],
    timeout_delay: false,
    waitIfNotPresent: false
    }));
  const [v27, v28] = txn1.data;
  const v31 = txn1.time;
  const v26 = txn1.from;
  ;
  stdlib.protect(ctc2, await interact.acceptWager(v27), {
    at: './index.rsh:53:25:application',
    fs: ['at ./index.rsh:52:9:application call to [unknown function] (defined at: ./index.rsh:52:13:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v26, v27, v28, v31, v20],
    evt_cnt: 1,
    funcNum: 2,
    hasLastTime: stdlib.checkedBigNumberify('./index.rsh:56:5:dot', stdlib.UInt_max, 3),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v27, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:56:5:dot', stdlib.UInt_max, 1), v26, v27, v28, v31]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:56:5:dot', stdlib.UInt_max, 1), v26, v27, v28]);
      const [v36] = txn2.data;
      const v39 = txn2.time;
      const v35 = txn2.from;
      
      const v38 = stdlib.add(v27, v27);
      sim_r.txns.push({
        amt: v27,
        kind: 'to',
        tok: undefined
        });
      sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:59:11:after expr stmt semicolon', stdlib.UInt_max, 3), v26, v27, v28, v35, v36, v38, v39]);
      sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:59:11:after expr stmt semicolon', stdlib.UInt_max, 3), v26, v27, v28, v35, v36, v38]);
      sim_r.view = [ctc8, [stdlib.checkedBigNumberify('./index.rsh:59:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
    tys: [ctc0, ctc1, ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv({
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeout_delay: false,
      waitIfNotPresent: false
      }));
    const [] = txn3.data;
    const v361 = txn3.time;
    const v358 = txn3.from;
    ;
    const v360 = stdlib.addressEq(v26, v358);
    stdlib.assert(v360, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:58:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:41:51:application',
      fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:58:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    }
  else {
    const [v36] = txn2.data;
    const v39 = txn2.time;
    const v35 = txn2.from;
    const v38 = stdlib.add(v27, v27);
    ;
    const txn3 = await (ctc.recv({
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc0],
      timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v26, v27, v28, v35, v36, v38, v39],
        evt_cnt: 0,
        funcNum: 5,
        hasLastTime: stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6),
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 3), v26, v27, v28, v35, v36, v38, v39]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 3), v26, v27, v28, v35, v36, v38]);
          const [] = txn4.data;
          const v339 = txn4.time;
          const v336 = txn4.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v338 = stdlib.addressEq(v35, v336);
          stdlib.assert(v338, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:69:14:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          sim_r.txns.push({
            amt: v38,
            kind: 'from',
            to: v35,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.nextSt = stdlib.digest(ctc5, []);
          sim_r.nextSt_noTime = stdlib.digest(ctc5, []);
          sim_r.view = [ctc5, []];
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: true,
        timeout_delay: false,
        tys: [ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const [] = txn4.data;
      const v339 = txn4.time;
      const v336 = txn4.from;
      ;
      const v338 = stdlib.addressEq(v35, v336);
      stdlib.assert(v338, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:69:14:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:41:51:application',
        fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:69:14:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      }
    else {
      const [v44] = txn3.data;
      const v47 = txn3.time;
      const v43 = txn3.from;
      const v46 = stdlib.add(v38, v27);
      ;
      const v49 = stdlib.addressEq(v28, v36);
      const v55 = stdlib.addressEq(v28, v44);
      const v57 = v55 ? false : true;
      const v60 = v49 ? v57 : true;
      if (v60) {
        const txn4 = await (ctc.recv({
          evt_cnt: 0,
          funcNum: 6,
          out_tys: [],
          timeout_delay: false,
          waitIfNotPresent: false
          }));
        const [] = txn4.data;
        const v65 = txn4.time;
        const v62 = txn4.from;
        ;
        const v64 = stdlib.addressEq(v26, v62);
        stdlib.assert(v64, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:75:12:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:41:51:application',
          fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:75:12:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        }
      else {
        const txn4 = await (ctc.recv({
          evt_cnt: 1,
          funcNum: 7,
          out_tys: [ctc3],
          timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v26, v27, v28, v35, v43, v46, v47],
            evt_cnt: 0,
            funcNum: 8,
            hasLastTime: stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6),
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 7), v26, v27, v28, v35, v43, v46, v47]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 7), v26, v27, v28, v35, v43, v46]);
              const [] = txn5.data;
              const v317 = txn5.time;
              const v314 = txn5.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v316 = stdlib.addressEq(v35, v314);
              stdlib.assert(v316, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:91:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              sim_r.txns.push({
                amt: v46,
                kind: 'from',
                to: v35,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc5, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc5, []);
              sim_r.view = [ctc5, []];
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: true,
            timeout_delay: false,
            tys: [ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1],
            waitIfNotPresent: false
            }));
          const [] = txn5.data;
          const v317 = txn5.time;
          const v314 = txn5.from;
          ;
          const v316 = stdlib.addressEq(v35, v314);
          stdlib.assert(v316, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:91:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:41:51:application',
            fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:91:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          }
        else {
          const [v92] = txn4.data;
          const v95 = txn4.time;
          const v91 = txn4.from;
          ;
          const v94 = stdlib.addressEq(v26, v91);
          stdlib.assert(v94, {
            at: './index.rsh:89:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v99 = stdlib.protect(ctc1, await interact.getPlayerToShoot(), {
            at: './index.rsh:98:46:application',
            fs: ['at ./index.rsh:97:9:application call to [unknown function] (defined at: ./index.rsh:97:13:function exp)'],
            msg: 'getPlayerToShoot',
            who: 'Bob'
            });
          const v101 = stdlib.protect(ctc1, await interact.random(), {
            at: 'reach standard library:60:31:application',
            fs: ['at ./index.rsh:99:46:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:97:9:application call to [unknown function] (defined at: ./index.rsh:97:13:function exp)'],
            msg: 'random',
            who: 'Bob'
            });
          const v102 = stdlib.digest(ctc4, [v101, v99]);
          
          const txn5 = await (ctc.sendrecv({
            args: [v26, v27, v28, v35, v43, v46, v95, v102],
            evt_cnt: 1,
            funcNum: 9,
            hasLastTime: stdlib.checkedBigNumberify('./index.rsh:102:5:dot', stdlib.UInt_max, 6),
            onlyIf: true,
            out_tys: [ctc3],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:102:5:dot', stdlib.UInt_max, 9), v26, v27, v28, v35, v43, v46, v95]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:102:5:dot', stdlib.UInt_max, 9), v26, v27, v28, v35, v43, v46]);
              const [v105] = txn5.data;
              const v108 = txn5.time;
              const v104 = txn5.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v107 = stdlib.addressEq(v35, v104);
              stdlib.assert(v107, {
                at: './index.rsh:102:5:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:105:11:after expr stmt semicolon', stdlib.UInt_max, 11), v26, v27, v28, v35, v43, v46, v108]);
              sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:105:11:after expr stmt semicolon', stdlib.UInt_max, 11), v26, v27, v28, v35, v43, v46]);
              sim_r.view = [ctc8, [stdlib.checkedBigNumberify('./index.rsh:105:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
            tys: [ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1, ctc3],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.recv({
              evt_cnt: 0,
              funcNum: 10,
              out_tys: [],
              timeout_delay: false,
              waitIfNotPresent: false
              }));
            const [] = txn6.data;
            const v295 = txn6.time;
            const v292 = txn6.from;
            ;
            const v294 = stdlib.addressEq(v43, v292);
            stdlib.assert(v294, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:104:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:41:51:application',
              fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:104:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            }
          else {
            const [v105] = txn5.data;
            const v108 = txn5.time;
            const v104 = txn5.from;
            ;
            const v107 = stdlib.addressEq(v35, v104);
            stdlib.assert(v107, {
              at: './index.rsh:102:5:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const txn6 = await (ctc.recv({
              evt_cnt: 1,
              funcNum: 11,
              out_tys: [ctc1],
              timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.recv({
                evt_cnt: 0,
                funcNum: 12,
                out_tys: [],
                timeout_delay: false,
                waitIfNotPresent: false
                }));
              const [] = txn7.data;
              const v273 = txn7.time;
              const v270 = txn7.from;
              ;
              const v272 = stdlib.addressEq(v26, v270);
              stdlib.assert(v272, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:115:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc2, await interact.informTimeout(), {
                at: './index.rsh:41:51:application',
                fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:115:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              }
            else {
              const [v114] = txn6.data;
              const v117 = txn6.time;
              const v113 = txn6.from;
              ;
              const v116 = stdlib.addressEq(v43, v113);
              stdlib.assert(v116, {
                at: './index.rsh:113:5:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const txn7 = await (ctc.recv({
                evt_cnt: 2,
                funcNum: 13,
                out_tys: [ctc1, ctc1],
                timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
                waitIfNotPresent: false
                }));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.recv({
                  evt_cnt: 0,
                  funcNum: 14,
                  out_tys: [],
                  timeout_delay: false,
                  waitIfNotPresent: false
                  }));
                const [] = txn8.data;
                const v251 = txn8.time;
                const v248 = txn8.from;
                ;
                const v250 = stdlib.addressEq(v43, v248);
                stdlib.assert(v250, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./index.rsh:124:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                ;
                stdlib.protect(ctc2, await interact.informTimeout(), {
                  at: './index.rsh:41:51:application',
                  fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:124:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Bob'
                  });
                
                return;
                }
              else {
                const [v122, v123] = txn7.data;
                const v126 = txn7.time;
                const v121 = txn7.from;
                ;
                const v125 = stdlib.addressEq(v26, v121);
                stdlib.assert(v125, {
                  at: './index.rsh:122:5:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                const txn8 = await (ctc.sendrecv({
                  args: [v26, v27, v28, v35, v43, v46, v114, v123, v126, v101, v99],
                  evt_cnt: 2,
                  funcNum: 15,
                  hasLastTime: stdlib.checkedBigNumberify('./index.rsh:131:5:dot', stdlib.UInt_max, 8),
                  onlyIf: true,
                  out_tys: [ctc1, ctc1],
                  pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
                  sim_p: (async (txn8) => {
                    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                    
                    sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:131:5:dot', stdlib.UInt_max, 15), v26, v27, v28, v35, v43, v46, v114, v123, v126]);
                    sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:131:5:dot', stdlib.UInt_max, 15), v26, v27, v28, v35, v43, v46, v114, v123]);
                    const [v131, v132] = txn8.data;
                    const v135 = txn8.time;
                    const v130 = txn8.from;
                    
                    sim_r.txns.push({
                      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                      kind: 'to',
                      tok: undefined
                      });
                    const v134 = stdlib.addressEq(v35, v130);
                    stdlib.assert(v134, {
                      at: './index.rsh:131:5:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Bob'
                      });
                    const v136 = stdlib.mod(v123, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                    const v137 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:136:40:decimal', stdlib.UInt_max, 0));
                    const v138 = stdlib.mod(v132, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                    const v139 = stdlib.eq(v138, stdlib.checkedBigNumberify('./index.rsh:136:71:decimal', stdlib.UInt_max, 0));
                    const v140 = stdlib.mod(v114, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                    const v141 = stdlib.eq(v140, stdlib.checkedBigNumberify('./index.rsh:136:98:decimal', stdlib.UInt_max, 0));
                    const v142 = v139 ? true : v141;
                    const v143 = v142 ? stdlib.checkedBigNumberify('./index.rsh:136:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:136:107:decimal', stdlib.UInt_max, 1);
                    const v144 = v137 ? stdlib.checkedBigNumberify('./index.rsh:136:44:decimal', stdlib.UInt_max, 0) : v143;
                    const v146 = stdlib.eq(v138, stdlib.checkedBigNumberify('./index.rsh:137:40:decimal', stdlib.UInt_max, 1));
                    const v148 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:137:71:decimal', stdlib.UInt_max, 1));
                    const v150 = stdlib.eq(v140, stdlib.checkedBigNumberify('./index.rsh:137:98:decimal', stdlib.UInt_max, 1));
                    const v151 = v148 ? true : v150;
                    const v152 = v151 ? stdlib.checkedBigNumberify('./index.rsh:137:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:137:107:decimal', stdlib.UInt_max, 1);
                    const v153 = v146 ? stdlib.checkedBigNumberify('./index.rsh:137:44:decimal', stdlib.UInt_max, 0) : v152;
                    const v155 = stdlib.eq(v140, stdlib.checkedBigNumberify('./index.rsh:138:40:decimal', stdlib.UInt_max, 2));
                    const v157 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:138:71:decimal', stdlib.UInt_max, 2));
                    const v159 = stdlib.eq(v138, stdlib.checkedBigNumberify('./index.rsh:138:98:decimal', stdlib.UInt_max, 2));
                    const v160 = v157 ? true : v159;
                    const v161 = v160 ? stdlib.checkedBigNumberify('./index.rsh:138:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:138:107:decimal', stdlib.UInt_max, 1);
                    const v162 = v155 ? stdlib.checkedBigNumberify('./index.rsh:138:44:decimal', stdlib.UInt_max, 0) : v161;
                    const v163 = stdlib.add(v144, v153);
                    const v164 = stdlib.add(v163, v162);
                    const v169 = stdlib.eq(v144, stdlib.checkedBigNumberify('./index.rsh:146:20:decimal', stdlib.UInt_max, 0));
                    const v170 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:146:37:decimal', stdlib.UInt_max, 0));
                    const v171 = stdlib.eq(v162, stdlib.checkedBigNumberify('./index.rsh:146:50:decimal', stdlib.UInt_max, 0));
                    const v172 = v170 ? v171 : false;
                    const v173 = stdlib.mul(v27, stdlib.checkedBigNumberify('./index.rsh:146:63:decimal', stdlib.UInt_max, 2));
                    const v174 = v172 ? v173 : v27;
                    const v175 = v169 ? stdlib.checkedBigNumberify('./index.rsh:146:24:decimal', stdlib.UInt_max, 0) : v174;
                    sim_r.txns.push({
                      amt: v175,
                      kind: 'from',
                      to: v26,
                      tok: undefined
                      });
                    const v183 = v169 ? v171 : false;
                    const v185 = v183 ? v173 : v27;
                    const v186 = v170 ? stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0) : v185;
                    sim_r.txns.push({
                      amt: v186,
                      kind: 'from',
                      to: v35,
                      tok: undefined
                      });
                    const v194 = v169 ? v170 : false;
                    const v196 = v194 ? v173 : v27;
                    const v197 = v171 ? stdlib.checkedBigNumberify('./index.rsh:148:24:decimal', stdlib.UInt_max, 0) : v196;
                    sim_r.txns.push({
                      amt: v197,
                      kind: 'from',
                      to: v43,
                      tok: undefined
                      });
                    const v202 = stdlib.eq(v164, stdlib.checkedBigNumberify('./index.rsh:149:27:decimal', stdlib.UInt_max, 0));
                    const v203 = stdlib.mul(v27, stdlib.checkedBigNumberify('./index.rsh:149:39:decimal', stdlib.UInt_max, 3));
                    const v204 = v202 ? v203 : v27;
                    sim_r.txns.push({
                      amt: v204,
                      kind: 'from',
                      to: v28,
                      tok: undefined
                      });
                    
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.nextSt = stdlib.digest(ctc5, []);
                    sim_r.nextSt_noTime = stdlib.digest(ctc5, []);
                    sim_r.view = [ctc5, []];
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: true,
                  timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
                  tys: [ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
                  waitIfNotPresent: false
                  }));
                if (txn8.didTimeout) {
                  const txn9 = await (ctc.recv({
                    evt_cnt: 0,
                    funcNum: 16,
                    out_tys: [],
                    timeout_delay: false,
                    waitIfNotPresent: false
                    }));
                  const [] = txn9.data;
                  const v229 = txn9.time;
                  const v226 = txn9.from;
                  ;
                  const v228 = stdlib.addressEq(v26, v226);
                  stdlib.assert(v228, {
                    at: 'reach standard library:209:7:dot',
                    fs: ['at ./index.rsh:133:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  ;
                  stdlib.protect(ctc2, await interact.informTimeout(), {
                    at: './index.rsh:41:51:application',
                    fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:133:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Bob'
                    });
                  
                  return;
                  }
                else {
                  const [v131, v132] = txn8.data;
                  const v135 = txn8.time;
                  const v130 = txn8.from;
                  ;
                  const v134 = stdlib.addressEq(v35, v130);
                  stdlib.assert(v134, {
                    at: './index.rsh:131:5:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  const v136 = stdlib.mod(v123, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                  const v137 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:136:40:decimal', stdlib.UInt_max, 0));
                  const v138 = stdlib.mod(v132, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                  const v139 = stdlib.eq(v138, stdlib.checkedBigNumberify('./index.rsh:136:71:decimal', stdlib.UInt_max, 0));
                  const v140 = stdlib.mod(v114, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                  const v141 = stdlib.eq(v140, stdlib.checkedBigNumberify('./index.rsh:136:98:decimal', stdlib.UInt_max, 0));
                  const v142 = v139 ? true : v141;
                  const v143 = v142 ? stdlib.checkedBigNumberify('./index.rsh:136:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:136:107:decimal', stdlib.UInt_max, 1);
                  const v144 = v137 ? stdlib.checkedBigNumberify('./index.rsh:136:44:decimal', stdlib.UInt_max, 0) : v143;
                  const v146 = stdlib.eq(v138, stdlib.checkedBigNumberify('./index.rsh:137:40:decimal', stdlib.UInt_max, 1));
                  const v148 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:137:71:decimal', stdlib.UInt_max, 1));
                  const v150 = stdlib.eq(v140, stdlib.checkedBigNumberify('./index.rsh:137:98:decimal', stdlib.UInt_max, 1));
                  const v151 = v148 ? true : v150;
                  const v152 = v151 ? stdlib.checkedBigNumberify('./index.rsh:137:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:137:107:decimal', stdlib.UInt_max, 1);
                  const v153 = v146 ? stdlib.checkedBigNumberify('./index.rsh:137:44:decimal', stdlib.UInt_max, 0) : v152;
                  const v155 = stdlib.eq(v140, stdlib.checkedBigNumberify('./index.rsh:138:40:decimal', stdlib.UInt_max, 2));
                  const v157 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:138:71:decimal', stdlib.UInt_max, 2));
                  const v159 = stdlib.eq(v138, stdlib.checkedBigNumberify('./index.rsh:138:98:decimal', stdlib.UInt_max, 2));
                  const v160 = v157 ? true : v159;
                  const v161 = v160 ? stdlib.checkedBigNumberify('./index.rsh:138:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:138:107:decimal', stdlib.UInt_max, 1);
                  const v162 = v155 ? stdlib.checkedBigNumberify('./index.rsh:138:44:decimal', stdlib.UInt_max, 0) : v161;
                  const v163 = stdlib.add(v144, v153);
                  const v164 = stdlib.add(v163, v162);
                  const v169 = stdlib.eq(v144, stdlib.checkedBigNumberify('./index.rsh:146:20:decimal', stdlib.UInt_max, 0));
                  const v170 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:146:37:decimal', stdlib.UInt_max, 0));
                  const v171 = stdlib.eq(v162, stdlib.checkedBigNumberify('./index.rsh:146:50:decimal', stdlib.UInt_max, 0));
                  const v172 = v170 ? v171 : false;
                  const v173 = stdlib.mul(v27, stdlib.checkedBigNumberify('./index.rsh:146:63:decimal', stdlib.UInt_max, 2));
                  const v174 = v172 ? v173 : v27;
                  const v175 = v169 ? stdlib.checkedBigNumberify('./index.rsh:146:24:decimal', stdlib.UInt_max, 0) : v174;
                  ;
                  const v183 = v169 ? v171 : false;
                  const v185 = v183 ? v173 : v27;
                  const v186 = v170 ? stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0) : v185;
                  ;
                  const v194 = v169 ? v170 : false;
                  const v196 = v194 ? v173 : v27;
                  const v197 = v171 ? stdlib.checkedBigNumberify('./index.rsh:148:24:decimal', stdlib.UInt_max, 0) : v196;
                  ;
                  const v202 = stdlib.eq(v164, stdlib.checkedBigNumberify('./index.rsh:149:27:decimal', stdlib.UInt_max, 0));
                  const v203 = stdlib.mul(v27, stdlib.checkedBigNumberify('./index.rsh:149:39:decimal', stdlib.UInt_max, 3));
                  const v204 = v202 ? v203 : v27;
                  ;
                  const v216 = [v144, v123, v153, v132, v162, v114];
                  stdlib.protect(ctc2, await interact.seeOutcome(v216), {
                    at: './index.rsh:153:24:application',
                    fs: ['at ./index.rsh:152:7:application call to [unknown function] (defined at: ./index.rsh:152:22:function exp)'],
                    msg: 'seeOutcome',
                    who: 'Bob'
                    });
                  
                  return;}
                }
              }
            }
          }
        }}
    }
  
  
  };
export async function Carl(ctc, interact) {
  if (ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Carl expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Carl expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1, ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc0, ctc0, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc0, ctc1]);
  
  
  const v22 = await ctc.creationTime();
  const v21 = stdlib.protect(ctc0, interact.getDonationAddress, 'for Carl\'s interact field getDonationAddress');
  
  const txn1 = await (ctc.recv({
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc1, ctc0],
    timeout_delay: false,
    waitIfNotPresent: false
    }));
  const [v27, v28] = txn1.data;
  const v31 = txn1.time;
  const v26 = txn1.from;
  ;
  const txn2 = await (ctc.recv({
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv({
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeout_delay: false,
      waitIfNotPresent: false
      }));
    const [] = txn3.data;
    const v361 = txn3.time;
    const v358 = txn3.from;
    ;
    const v360 = stdlib.addressEq(v26, v358);
    stdlib.assert(v360, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:58:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Carl'
      });
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:41:51:application',
      fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:58:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Carl'
      });
    
    return;
    }
  else {
    const [v36] = txn2.data;
    const v39 = txn2.time;
    const v35 = txn2.from;
    const v38 = stdlib.add(v27, v27);
    ;
    stdlib.protect(ctc2, await interact.acceptWager(v27), {
      at: './index.rsh:62:25:application',
      fs: ['at ./index.rsh:61:9:application call to [unknown function] (defined at: ./index.rsh:61:13:function exp)'],
      msg: 'acceptWager',
      who: 'Carl'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v26, v27, v28, v35, v36, v38, v39, v21],
      evt_cnt: 1,
      funcNum: 4,
      hasLastTime: stdlib.checkedBigNumberify('./index.rsh:65:5:dot', stdlib.UInt_max, 6),
      onlyIf: true,
      out_tys: [ctc0],
      pay: [v27, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:65:5:dot', stdlib.UInt_max, 3), v26, v27, v28, v35, v36, v38, v39]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:65:5:dot', stdlib.UInt_max, 3), v26, v27, v28, v35, v36, v38]);
        const [v44] = txn3.data;
        const v47 = txn3.time;
        const v43 = txn3.from;
        
        const v46 = stdlib.add(v38, v27);
        sim_r.txns.push({
          amt: v27,
          kind: 'to',
          tok: undefined
          });
        const v49 = stdlib.addressEq(v28, v36);
        const v55 = stdlib.addressEq(v28, v44);
        const v57 = v55 ? false : true;
        const v60 = v49 ? v57 : true;
        if (v60) {
          sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:74:13:after expr stmt semicolon', stdlib.UInt_max, 5), v26, v46, v47]);
          sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:74:13:after expr stmt semicolon', stdlib.UInt_max, 5), v26, v46]);
          sim_r.view = [ctc7, [stdlib.checkedBigNumberify('./index.rsh:74:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }
        else {
          sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:81:11:after expr stmt semicolon', stdlib.UInt_max, 7), v26, v27, v28, v35, v43, v46, v47]);
          sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:81:11:after expr stmt semicolon', stdlib.UInt_max, 7), v26, v27, v28, v35, v43, v46]);
          sim_r.view = [ctc7, [stdlib.checkedBigNumberify('./index.rsh:81:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }
        return sim_r;
        }),
      soloSend: true,
      timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
      tys: [ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1, ctc0],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        evt_cnt: 0,
        funcNum: 5,
        out_tys: [],
        timeout_delay: false,
        waitIfNotPresent: false
        }));
      const [] = txn4.data;
      const v339 = txn4.time;
      const v336 = txn4.from;
      ;
      const v338 = stdlib.addressEq(v35, v336);
      stdlib.assert(v338, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:69:14:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Carl'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:41:51:application',
        fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:69:14:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'informTimeout',
        who: 'Carl'
        });
      
      return;
      }
    else {
      const [v44] = txn3.data;
      const v47 = txn3.time;
      const v43 = txn3.from;
      const v46 = stdlib.add(v38, v27);
      ;
      const v49 = stdlib.addressEq(v28, v36);
      const v55 = stdlib.addressEq(v28, v44);
      const v57 = v55 ? false : true;
      const v60 = v49 ? v57 : true;
      if (v60) {
        const txn4 = await (ctc.recv({
          evt_cnt: 0,
          funcNum: 6,
          out_tys: [],
          timeout_delay: false,
          waitIfNotPresent: false
          }));
        const [] = txn4.data;
        const v65 = txn4.time;
        const v62 = txn4.from;
        ;
        const v64 = stdlib.addressEq(v26, v62);
        stdlib.assert(v64, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:75:12:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Carl'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:41:51:application',
          fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:75:12:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'Carl'
          });
        
        return;
        }
      else {
        const txn4 = await (ctc.recv({
          evt_cnt: 1,
          funcNum: 7,
          out_tys: [ctc3],
          timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.recv({
            evt_cnt: 0,
            funcNum: 8,
            out_tys: [],
            timeout_delay: false,
            waitIfNotPresent: false
            }));
          const [] = txn5.data;
          const v317 = txn5.time;
          const v314 = txn5.from;
          ;
          const v316 = stdlib.addressEq(v35, v314);
          stdlib.assert(v316, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:91:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Carl'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:41:51:application',
            fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:91:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'Carl'
            });
          
          return;
          }
        else {
          const [v92] = txn4.data;
          const v95 = txn4.time;
          const v91 = txn4.from;
          ;
          const v94 = stdlib.addressEq(v26, v91);
          stdlib.assert(v94, {
            at: './index.rsh:89:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Carl'
            });
          const txn5 = await (ctc.recv({
            evt_cnt: 1,
            funcNum: 9,
            out_tys: [ctc3],
            timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v26, v27, v28, v35, v43, v46, v95],
              evt_cnt: 0,
              funcNum: 10,
              hasLastTime: stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6),
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 9), v26, v27, v28, v35, v43, v46, v95]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 9), v26, v27, v28, v35, v43, v46]);
                const [] = txn6.data;
                const v295 = txn6.time;
                const v292 = txn6.from;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v294 = stdlib.addressEq(v43, v292);
                stdlib.assert(v294, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./index.rsh:104:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Carl'
                  });
                sim_r.txns.push({
                  amt: v46,
                  kind: 'from',
                  to: v43,
                  tok: undefined
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.nextSt = stdlib.digest(ctc4, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc4, []);
                sim_r.view = [ctc4, []];
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: true,
              timeout_delay: false,
              tys: [ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1],
              waitIfNotPresent: false
              }));
            const [] = txn6.data;
            const v295 = txn6.time;
            const v292 = txn6.from;
            ;
            const v294 = stdlib.addressEq(v43, v292);
            stdlib.assert(v294, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:104:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Carl'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:41:51:application',
              fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:104:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'Carl'
              });
            
            return;
            }
          else {
            const [v105] = txn5.data;
            const v108 = txn5.time;
            const v104 = txn5.from;
            ;
            const v107 = stdlib.addressEq(v35, v104);
            stdlib.assert(v107, {
              at: './index.rsh:102:5:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Carl'
              });
            const v112 = stdlib.protect(ctc1, await interact.getPlayerToShoot(), {
              at: './index.rsh:111:56:application',
              fs: ['at ./index.rsh:110:9:application call to [unknown function] (defined at: ./index.rsh:110:13:function exp)'],
              msg: 'getPlayerToShoot',
              who: 'Carl'
              });
            
            const txn6 = await (ctc.sendrecv({
              args: [v26, v27, v28, v35, v43, v46, v108, v112],
              evt_cnt: 1,
              funcNum: 11,
              hasLastTime: stdlib.checkedBigNumberify('./index.rsh:113:5:dot', stdlib.UInt_max, 6),
              onlyIf: true,
              out_tys: [ctc1],
              pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:113:5:dot', stdlib.UInt_max, 11), v26, v27, v28, v35, v43, v46, v108]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:113:5:dot', stdlib.UInt_max, 11), v26, v27, v28, v35, v43, v46]);
                const [v114] = txn6.data;
                const v117 = txn6.time;
                const v113 = txn6.from;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v116 = stdlib.addressEq(v43, v113);
                stdlib.assert(v116, {
                  at: './index.rsh:113:5:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Carl'
                  });
                sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:116:11:after expr stmt semicolon', stdlib.UInt_max, 13), v26, v27, v28, v35, v43, v46, v114, v117]);
                sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:116:11:after expr stmt semicolon', stdlib.UInt_max, 13), v26, v27, v28, v35, v43, v46, v114]);
                sim_r.view = [ctc7, [stdlib.checkedBigNumberify('./index.rsh:116:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                sim_r.isHalt = false;
                
                return sim_r;
                }),
              soloSend: true,
              timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
              tys: [ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1, ctc1],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.recv({
                evt_cnt: 0,
                funcNum: 12,
                out_tys: [],
                timeout_delay: false,
                waitIfNotPresent: false
                }));
              const [] = txn7.data;
              const v273 = txn7.time;
              const v270 = txn7.from;
              ;
              const v272 = stdlib.addressEq(v26, v270);
              stdlib.assert(v272, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:115:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'Carl'
                });
              ;
              stdlib.protect(ctc2, await interact.informTimeout(), {
                at: './index.rsh:41:51:application',
                fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:115:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'informTimeout',
                who: 'Carl'
                });
              
              return;
              }
            else {
              const [v114] = txn6.data;
              const v117 = txn6.time;
              const v113 = txn6.from;
              ;
              const v116 = stdlib.addressEq(v43, v113);
              stdlib.assert(v116, {
                at: './index.rsh:113:5:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Carl'
                });
              const txn7 = await (ctc.recv({
                evt_cnt: 2,
                funcNum: 13,
                out_tys: [ctc1, ctc1],
                timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
                waitIfNotPresent: false
                }));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.sendrecv({
                  args: [v26, v27, v28, v35, v43, v46, v114, v117],
                  evt_cnt: 0,
                  funcNum: 14,
                  hasLastTime: stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 7),
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
                  sim_p: (async (txn8) => {
                    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                    
                    sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 13), v26, v27, v28, v35, v43, v46, v114, v117]);
                    sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 13), v26, v27, v28, v35, v43, v46, v114]);
                    const [] = txn8.data;
                    const v251 = txn8.time;
                    const v248 = txn8.from;
                    
                    sim_r.txns.push({
                      amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                      kind: 'to',
                      tok: undefined
                      });
                    const v250 = stdlib.addressEq(v43, v248);
                    stdlib.assert(v250, {
                      at: 'reach standard library:209:7:dot',
                      fs: ['at ./index.rsh:124:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Carl'
                      });
                    sim_r.txns.push({
                      amt: v46,
                      kind: 'from',
                      to: v43,
                      tok: undefined
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.nextSt = stdlib.digest(ctc4, []);
                    sim_r.nextSt_noTime = stdlib.digest(ctc4, []);
                    sim_r.view = [ctc4, []];
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: true,
                  timeout_delay: false,
                  tys: [ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1, ctc1],
                  waitIfNotPresent: false
                  }));
                const [] = txn8.data;
                const v251 = txn8.time;
                const v248 = txn8.from;
                ;
                const v250 = stdlib.addressEq(v43, v248);
                stdlib.assert(v250, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./index.rsh:124:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Carl'
                  });
                ;
                stdlib.protect(ctc2, await interact.informTimeout(), {
                  at: './index.rsh:41:51:application',
                  fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:124:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Carl'
                  });
                
                return;
                }
              else {
                const [v122, v123] = txn7.data;
                const v126 = txn7.time;
                const v121 = txn7.from;
                ;
                const v125 = stdlib.addressEq(v26, v121);
                stdlib.assert(v125, {
                  at: './index.rsh:122:5:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Carl'
                  });
                const txn8 = await (ctc.recv({
                  evt_cnt: 2,
                  funcNum: 15,
                  out_tys: [ctc1, ctc1],
                  timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
                  waitIfNotPresent: false
                  }));
                if (txn8.didTimeout) {
                  const txn9 = await (ctc.recv({
                    evt_cnt: 0,
                    funcNum: 16,
                    out_tys: [],
                    timeout_delay: false,
                    waitIfNotPresent: false
                    }));
                  const [] = txn9.data;
                  const v229 = txn9.time;
                  const v226 = txn9.from;
                  ;
                  const v228 = stdlib.addressEq(v26, v226);
                  stdlib.assert(v228, {
                    at: 'reach standard library:209:7:dot',
                    fs: ['at ./index.rsh:133:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Carl'
                    });
                  ;
                  stdlib.protect(ctc2, await interact.informTimeout(), {
                    at: './index.rsh:41:51:application',
                    fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:133:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Carl'
                    });
                  
                  return;
                  }
                else {
                  const [v131, v132] = txn8.data;
                  const v135 = txn8.time;
                  const v130 = txn8.from;
                  ;
                  const v134 = stdlib.addressEq(v35, v130);
                  stdlib.assert(v134, {
                    at: './index.rsh:131:5:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Carl'
                    });
                  const v136 = stdlib.mod(v123, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                  const v137 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:136:40:decimal', stdlib.UInt_max, 0));
                  const v138 = stdlib.mod(v132, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                  const v139 = stdlib.eq(v138, stdlib.checkedBigNumberify('./index.rsh:136:71:decimal', stdlib.UInt_max, 0));
                  const v140 = stdlib.mod(v114, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                  const v141 = stdlib.eq(v140, stdlib.checkedBigNumberify('./index.rsh:136:98:decimal', stdlib.UInt_max, 0));
                  const v142 = v139 ? true : v141;
                  const v143 = v142 ? stdlib.checkedBigNumberify('./index.rsh:136:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:136:107:decimal', stdlib.UInt_max, 1);
                  const v144 = v137 ? stdlib.checkedBigNumberify('./index.rsh:136:44:decimal', stdlib.UInt_max, 0) : v143;
                  const v146 = stdlib.eq(v138, stdlib.checkedBigNumberify('./index.rsh:137:40:decimal', stdlib.UInt_max, 1));
                  const v148 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:137:71:decimal', stdlib.UInt_max, 1));
                  const v150 = stdlib.eq(v140, stdlib.checkedBigNumberify('./index.rsh:137:98:decimal', stdlib.UInt_max, 1));
                  const v151 = v148 ? true : v150;
                  const v152 = v151 ? stdlib.checkedBigNumberify('./index.rsh:137:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:137:107:decimal', stdlib.UInt_max, 1);
                  const v153 = v146 ? stdlib.checkedBigNumberify('./index.rsh:137:44:decimal', stdlib.UInt_max, 0) : v152;
                  const v155 = stdlib.eq(v140, stdlib.checkedBigNumberify('./index.rsh:138:40:decimal', stdlib.UInt_max, 2));
                  const v157 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:138:71:decimal', stdlib.UInt_max, 2));
                  const v159 = stdlib.eq(v138, stdlib.checkedBigNumberify('./index.rsh:138:98:decimal', stdlib.UInt_max, 2));
                  const v160 = v157 ? true : v159;
                  const v161 = v160 ? stdlib.checkedBigNumberify('./index.rsh:138:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:138:107:decimal', stdlib.UInt_max, 1);
                  const v162 = v155 ? stdlib.checkedBigNumberify('./index.rsh:138:44:decimal', stdlib.UInt_max, 0) : v161;
                  const v163 = stdlib.add(v144, v153);
                  const v164 = stdlib.add(v163, v162);
                  const v169 = stdlib.eq(v144, stdlib.checkedBigNumberify('./index.rsh:146:20:decimal', stdlib.UInt_max, 0));
                  const v170 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:146:37:decimal', stdlib.UInt_max, 0));
                  const v171 = stdlib.eq(v162, stdlib.checkedBigNumberify('./index.rsh:146:50:decimal', stdlib.UInt_max, 0));
                  const v172 = v170 ? v171 : false;
                  const v173 = stdlib.mul(v27, stdlib.checkedBigNumberify('./index.rsh:146:63:decimal', stdlib.UInt_max, 2));
                  const v174 = v172 ? v173 : v27;
                  const v175 = v169 ? stdlib.checkedBigNumberify('./index.rsh:146:24:decimal', stdlib.UInt_max, 0) : v174;
                  ;
                  const v183 = v169 ? v171 : false;
                  const v185 = v183 ? v173 : v27;
                  const v186 = v170 ? stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0) : v185;
                  ;
                  const v194 = v169 ? v170 : false;
                  const v196 = v194 ? v173 : v27;
                  const v197 = v171 ? stdlib.checkedBigNumberify('./index.rsh:148:24:decimal', stdlib.UInt_max, 0) : v196;
                  ;
                  const v202 = stdlib.eq(v164, stdlib.checkedBigNumberify('./index.rsh:149:27:decimal', stdlib.UInt_max, 0));
                  const v203 = stdlib.mul(v27, stdlib.checkedBigNumberify('./index.rsh:149:39:decimal', stdlib.UInt_max, 3));
                  const v204 = v202 ? v203 : v27;
                  ;
                  const v220 = [v144, v123, v153, v132, v162, v114];
                  stdlib.protect(ctc2, await interact.seeOutcome(v220), {
                    at: './index.rsh:153:24:application',
                    fs: ['at ./index.rsh:152:7:application call to [unknown function] (defined at: ./index.rsh:152:22:function exp)'],
                    msg: 'seeOutcome',
                    who: 'Carl'
                    });
                  
                  return;}
                }
              }
            }
          }
        }}
    }
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 4
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
substring 0 32
store 2
substring 32 64
store 3
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
dup
bz ctor
// Handler 1
dup
int 1
==
bz l0
pop
txna ApplicationArgs 1
dup
len
int 8
==
assert
dup
btoi
store 255
pop
txna ApplicationArgs 2
dup
len
int 40
==
assert
dup
substring 0 8
btoi
store 254
dup
substring 8 40
store 253
pop
// compute state in HM_Check 0
int 8
bzero
load 255
itob
concat
sha256
load 2
==
assert
int 16
bzero
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l1
dig 1
gtxns FirstValid
<=
assert
b l2
l1:
pop
l2:
load 1
substring 8 16
btoi
dup
bz l3
dig 1
gtxns LastValid
>=
assert
b l4
l3:
pop
l4:
pop
// "CheckPay"
// "./index.rsh:49:5:dot"
// "[]"
load 254
dup
bz l5
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l6
dig 1
gtxns FirstValid
<=
assert
b l7
l6:
pop
l7:
load 1
substring 8 16
btoi
dup
bz l8
dig 1
gtxns LastValid
>=
assert
b l9
l8:
pop
l9:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l5:
pop
// compute state in HM_Set 1
byte base64(AAAAAAAAAAE=)
txn Sender
concat
load 254
itob
concat
load 253
concat
global Round
itob
concat
sha256
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0:
// Handler 2
dup
int 2
==
bz l10
pop
txna ApplicationArgs 1
dup
len
int 80
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 251
pop
// compute state in HM_Check 1
byte base64(AAAAAAAAAAE=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
sha256
load 2
==
assert
int 8
bzero
load 252
int 30
+
itob
concat
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l11
dig 1
gtxns FirstValid
<=
assert
b l12
l11:
pop
l12:
load 1
substring 8 16
btoi
dup
bz l13
dig 1
gtxns LastValid
>=
assert
b l14
l13:
pop
l14:
pop
load 254
dup
+
store 250
// "CheckPay"
// "./index.rsh:56:5:dot"
// "[]"
load 254
dup
bz l15
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l16
dig 1
gtxns FirstValid
<=
assert
b l17
l16:
pop
l17:
load 1
substring 8 16
btoi
dup
bz l18
dig 1
gtxns LastValid
>=
assert
b l19
l18:
pop
l19:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l15:
pop
// compute state in HM_Set 3
byte base64(AAAAAAAAAAM=)
load 255
concat
load 254
itob
concat
load 253
concat
txn Sender
concat
load 251
concat
load 250
itob
concat
global Round
itob
concat
sha256
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l10:
// Handler 3
dup
int 3
==
bz l20
pop
txna ApplicationArgs 1
dup
len
int 80
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 1
byte base64(AAAAAAAAAAE=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
sha256
load 2
==
assert
load 252
int 30
+
itob
int 8
bzero
concat
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l21
dig 1
gtxns FirstValid
<=
assert
b l22
l21:
pop
l22:
load 1
substring 8 16
btoi
dup
bz l23
dig 1
gtxns LastValid
>=
assert
b l24
l23:
pop
l24:
pop
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:58:39:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:58:39:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 254
dup
bz l25
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l26
dig 1
gtxns FirstValid
<=
assert
b l27
l26:
pop
l27:
load 1
substring 8 16
btoi
dup
bz l28
dig 1
gtxns LastValid
>=
assert
b l29
l28:
pop
l29:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l25:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l31
dig 1
gtxns FirstValid
<=
assert
b l32
l31:
pop
l32:
load 1
substring 8 16
btoi
dup
bz l33
dig 1
gtxns LastValid
>=
assert
b l34
l33:
pop
l34:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l30:
pop
global ZeroAddress
store 2
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l20:
// Handler 4
dup
int 4
==
bz l35
pop
txna ApplicationArgs 1
dup
len
int 152
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 136
store 251
dup
substring 136 144
btoi
store 250
dup
substring 144 152
btoi
store 249
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 248
pop
// compute state in HM_Check 3
byte base64(AAAAAAAAAAM=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
sha256
load 2
==
assert
int 8
bzero
load 249
int 30
+
itob
concat
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l36
dig 1
gtxns FirstValid
<=
assert
b l37
l36:
pop
l37:
load 1
substring 8 16
btoi
dup
bz l38
dig 1
gtxns LastValid
>=
assert
b l39
l38:
pop
l39:
pop
load 250
load 254
+
store 247
// "CheckPay"
// "./index.rsh:65:5:dot"
// "[]"
load 254
dup
bz l40
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l41
dig 1
gtxns FirstValid
<=
assert
b l42
l41:
pop
l42:
load 1
substring 8 16
btoi
dup
bz l43
dig 1
gtxns LastValid
>=
assert
b l44
l43:
pop
l44:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l40:
pop
load 253
load 251
==
!
load 253
load 248
==
!
||
bz l45
// compute state in HM_Set 5
byte base64(AAAAAAAAAAU=)
load 255
concat
load 247
itob
concat
global Round
itob
concat
sha256
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l45:
// compute state in HM_Set 7
byte base64(AAAAAAAAAAc=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
txn Sender
concat
load 247
itob
concat
global Round
itob
concat
sha256
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l35:
// Handler 5
dup
int 5
==
bz l46
pop
txna ApplicationArgs 1
dup
len
int 152
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 136
store 251
dup
substring 136 144
btoi
store 250
dup
substring 144 152
btoi
store 249
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 3
byte base64(AAAAAAAAAAM=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
sha256
load 2
==
assert
load 249
int 30
+
itob
int 8
bzero
concat
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l47
dig 1
gtxns FirstValid
<=
assert
b l48
l47:
pop
l48:
load 1
substring 8 16
btoi
dup
bz l49
dig 1
gtxns LastValid
>=
assert
b l50
l49:
pop
l50:
pop
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:69:14:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:69:14:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 252
txn Sender
==
assert
load 250
dup
bz l51
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l52
dig 1
gtxns FirstValid
<=
assert
b l53
l52:
pop
l53:
load 1
substring 8 16
btoi
dup
bz l54
dig 1
gtxns LastValid
>=
assert
b l55
l54:
pop
l55:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 252
dig 1
gtxns Receiver
==
assert
l51:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l57
dig 1
gtxns FirstValid
<=
assert
b l58
l57:
pop
l58:
load 1
substring 8 16
btoi
dup
bz l59
dig 1
gtxns LastValid
>=
assert
b l60
l59:
pop
l60:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l56:
pop
global ZeroAddress
store 2
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l46:
// Handler 6
dup
int 6
==
bz l61
pop
txna ApplicationArgs 1
dup
len
int 48
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 5
byte base64(AAAAAAAAAAU=)
load 255
concat
load 254
itob
concat
load 253
itob
concat
sha256
load 2
==
assert
int 16
bzero
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l62
dig 1
gtxns FirstValid
<=
assert
b l63
l62:
pop
l63:
load 1
substring 8 16
btoi
dup
bz l64
dig 1
gtxns LastValid
>=
assert
b l65
l64:
pop
l65:
pop
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:75:12:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:75:12:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 254
dup
bz l66
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l67
dig 1
gtxns FirstValid
<=
assert
b l68
l67:
pop
l68:
load 1
substring 8 16
btoi
dup
bz l69
dig 1
gtxns LastValid
>=
assert
b l70
l69:
pop
l70:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l66:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l72
dig 1
gtxns FirstValid
<=
assert
b l73
l72:
pop
l73:
load 1
substring 8 16
btoi
dup
bz l74
dig 1
gtxns LastValid
>=
assert
b l75
l74:
pop
l75:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l71:
pop
global ZeroAddress
store 2
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l61:
// Handler 7
dup
int 7
==
bz l76
pop
txna ApplicationArgs 1
dup
len
int 152
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 136
store 251
dup
substring 136 144
btoi
store 250
dup
substring 144 152
btoi
store 249
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 248
pop
// compute state in HM_Check 7
byte base64(AAAAAAAAAAc=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
sha256
load 2
==
assert
int 8
bzero
load 249
int 30
+
itob
concat
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l77
dig 1
gtxns FirstValid
<=
assert
b l78
l77:
pop
l78:
load 1
substring 8 16
btoi
dup
bz l79
dig 1
gtxns LastValid
>=
assert
b l80
l79:
pop
l80:
pop
// "CheckPay"
// "./index.rsh:89:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:89:5:dot"
// "[]"
load 255
txn Sender
==
assert
// compute state in HM_Set 9
byte base64(AAAAAAAAAAk=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
load 250
itob
concat
global Round
itob
concat
sha256
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l76:
// Handler 8
dup
int 8
==
bz l81
pop
txna ApplicationArgs 1
dup
len
int 152
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 136
store 251
dup
substring 136 144
btoi
store 250
dup
substring 144 152
btoi
store 249
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 7
byte base64(AAAAAAAAAAc=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
sha256
load 2
==
assert
load 249
int 30
+
itob
int 8
bzero
concat
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l82
dig 1
gtxns FirstValid
<=
assert
b l83
l82:
pop
l83:
load 1
substring 8 16
btoi
dup
bz l84
dig 1
gtxns LastValid
>=
assert
b l85
l84:
pop
l85:
pop
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:91:39:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:91:39:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 252
txn Sender
==
assert
load 250
dup
bz l86
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l87
dig 1
gtxns FirstValid
<=
assert
b l88
l87:
pop
l88:
load 1
substring 8 16
btoi
dup
bz l89
dig 1
gtxns LastValid
>=
assert
b l90
l89:
pop
l90:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 252
dig 1
gtxns Receiver
==
assert
l86:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l92
dig 1
gtxns FirstValid
<=
assert
b l93
l92:
pop
l93:
load 1
substring 8 16
btoi
dup
bz l94
dig 1
gtxns LastValid
>=
assert
b l95
l94:
pop
l95:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l91:
pop
global ZeroAddress
store 2
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l81:
// Handler 9
dup
int 9
==
bz l96
pop
txna ApplicationArgs 1
dup
len
int 152
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 136
store 251
dup
substring 136 144
btoi
store 250
dup
substring 144 152
btoi
store 249
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 248
pop
// compute state in HM_Check 9
byte base64(AAAAAAAAAAk=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
sha256
load 2
==
assert
int 8
bzero
load 249
int 30
+
itob
concat
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l97
dig 1
gtxns FirstValid
<=
assert
b l98
l97:
pop
l98:
load 1
substring 8 16
btoi
dup
bz l99
dig 1
gtxns LastValid
>=
assert
b l100
l99:
pop
l100:
pop
// "CheckPay"
// "./index.rsh:102:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:102:5:dot"
// "[]"
load 252
txn Sender
==
assert
// compute state in HM_Set 11
byte base64(AAAAAAAAAAs=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
load 250
itob
concat
global Round
itob
concat
sha256
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l96:
// Handler 10
dup
int 10
==
bz l101
pop
txna ApplicationArgs 1
dup
len
int 152
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 136
store 251
dup
substring 136 144
btoi
store 250
dup
substring 144 152
btoi
store 249
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 9
byte base64(AAAAAAAAAAk=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
sha256
load 2
==
assert
load 249
int 30
+
itob
int 8
bzero
concat
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l102
dig 1
gtxns FirstValid
<=
assert
b l103
l102:
pop
l103:
load 1
substring 8 16
btoi
dup
bz l104
dig 1
gtxns LastValid
>=
assert
b l105
l104:
pop
l105:
pop
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:104:39:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:104:39:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 251
txn Sender
==
assert
load 250
dup
bz l106
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l107
dig 1
gtxns FirstValid
<=
assert
b l108
l107:
pop
l108:
load 1
substring 8 16
btoi
dup
bz l109
dig 1
gtxns LastValid
>=
assert
b l110
l109:
pop
l110:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 251
dig 1
gtxns Receiver
==
assert
l106:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l112
dig 1
gtxns FirstValid
<=
assert
b l113
l112:
pop
l113:
load 1
substring 8 16
btoi
dup
bz l114
dig 1
gtxns LastValid
>=
assert
b l115
l114:
pop
l115:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l111:
pop
global ZeroAddress
store 2
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l101:
// Handler 11
dup
int 11
==
bz l116
pop
txna ApplicationArgs 1
dup
len
int 152
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 136
store 251
dup
substring 136 144
btoi
store 250
dup
substring 144 152
btoi
store 249
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 248
pop
// compute state in HM_Check 11
byte base64(AAAAAAAAAAs=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
sha256
load 2
==
assert
int 8
bzero
load 249
int 30
+
itob
concat
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l117
dig 1
gtxns FirstValid
<=
assert
b l118
l117:
pop
l118:
load 1
substring 8 16
btoi
dup
bz l119
dig 1
gtxns LastValid
>=
assert
b l120
l119:
pop
l120:
pop
// "CheckPay"
// "./index.rsh:113:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:113:5:dot"
// "[]"
load 251
txn Sender
==
assert
// compute state in HM_Set 13
byte base64(AAAAAAAAAA0=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
load 250
itob
concat
load 248
itob
concat
global Round
itob
concat
sha256
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l116:
// Handler 12
dup
int 12
==
bz l121
pop
txna ApplicationArgs 1
dup
len
int 152
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 136
store 251
dup
substring 136 144
btoi
store 250
dup
substring 144 152
btoi
store 249
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 11
byte base64(AAAAAAAAAAs=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
sha256
load 2
==
assert
load 249
int 30
+
itob
int 8
bzero
concat
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l122
dig 1
gtxns FirstValid
<=
assert
b l123
l122:
pop
l123:
load 1
substring 8 16
btoi
dup
bz l124
dig 1
gtxns LastValid
>=
assert
b l125
l124:
pop
l125:
pop
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:115:39:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:115:39:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 250
dup
bz l126
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l127
dig 1
gtxns FirstValid
<=
assert
b l128
l127:
pop
l128:
load 1
substring 8 16
btoi
dup
bz l129
dig 1
gtxns LastValid
>=
assert
b l130
l129:
pop
l130:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l126:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l132
dig 1
gtxns FirstValid
<=
assert
b l133
l132:
pop
l133:
load 1
substring 8 16
btoi
dup
bz l134
dig 1
gtxns LastValid
>=
assert
b l135
l134:
pop
l135:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l131:
pop
global ZeroAddress
store 2
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l121:
// Handler 13
dup
int 13
==
bz l136
pop
txna ApplicationArgs 1
dup
len
int 160
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 136
store 251
dup
substring 136 144
btoi
store 250
dup
substring 144 152
btoi
store 249
dup
substring 152 160
btoi
store 248
pop
txna ApplicationArgs 2
dup
len
int 16
==
assert
dup
substring 0 8
btoi
store 247
dup
substring 8 16
btoi
store 246
pop
// compute state in HM_Check 13
byte base64(AAAAAAAAAA0=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
load 248
itob
concat
sha256
load 2
==
assert
int 8
bzero
load 248
int 30
+
itob
concat
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l137
dig 1
gtxns FirstValid
<=
assert
b l138
l137:
pop
l138:
load 1
substring 8 16
btoi
dup
bz l139
dig 1
gtxns LastValid
>=
assert
b l140
l139:
pop
l140:
pop
// "CheckPay"
// "./index.rsh:122:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:122:5:dot"
// "[]"
load 255
txn Sender
==
assert
// compute state in HM_Set 15
byte base64(AAAAAAAAAA8=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
load 246
itob
concat
global Round
itob
concat
sha256
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l136:
// Handler 14
dup
int 14
==
bz l141
pop
txna ApplicationArgs 1
dup
len
int 160
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 136
store 251
dup
substring 136 144
btoi
store 250
dup
substring 144 152
btoi
store 249
dup
substring 152 160
btoi
store 248
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 13
byte base64(AAAAAAAAAA0=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
load 248
itob
concat
sha256
load 2
==
assert
load 248
int 30
+
itob
int 8
bzero
concat
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l142
dig 1
gtxns FirstValid
<=
assert
b l143
l142:
pop
l143:
load 1
substring 8 16
btoi
dup
bz l144
dig 1
gtxns LastValid
>=
assert
b l145
l144:
pop
l145:
pop
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:124:37:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:124:37:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 251
txn Sender
==
assert
load 250
dup
bz l146
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l147
dig 1
gtxns FirstValid
<=
assert
b l148
l147:
pop
l148:
load 1
substring 8 16
btoi
dup
bz l149
dig 1
gtxns LastValid
>=
assert
b l150
l149:
pop
l150:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 251
dig 1
gtxns Receiver
==
assert
l146:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l152
dig 1
gtxns FirstValid
<=
assert
b l153
l152:
pop
l153:
load 1
substring 8 16
btoi
dup
bz l154
dig 1
gtxns LastValid
>=
assert
b l155
l154:
pop
l155:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l151:
pop
global ZeroAddress
store 2
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l141:
// Handler 15
dup
int 15
==
bz l156
pop
txna ApplicationArgs 1
dup
len
int 168
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 136
store 251
dup
substring 136 144
btoi
store 250
dup
substring 144 152
btoi
store 249
dup
substring 152 160
btoi
store 248
dup
substring 160 168
btoi
store 247
pop
txna ApplicationArgs 2
dup
len
int 16
==
assert
dup
substring 0 8
btoi
store 246
dup
substring 8 16
btoi
store 245
pop
// compute state in HM_Check 15
byte base64(AAAAAAAAAA8=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
load 248
itob
concat
load 247
itob
concat
sha256
load 2
==
assert
int 8
bzero
load 247
int 30
+
itob
concat
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l157
dig 1
gtxns FirstValid
<=
assert
b l158
l157:
pop
l158:
load 1
substring 8 16
btoi
dup
bz l159
dig 1
gtxns LastValid
>=
assert
b l160
l159:
pop
l160:
pop
// "CheckPay"
// "./index.rsh:131:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:131:5:dot"
// "[]"
load 252
txn Sender
==
assert
load 248
int 3
%
store 244
load 245
int 3
%
store 243
load 249
int 3
%
store 242
int 1
int 0
load 243
int 0
==
load 242
int 0
==
||
select
int 0
load 244
int 0
==
select
store 241
int 1
int 0
load 244
int 1
==
load 242
int 1
==
||
select
int 0
load 243
int 1
==
select
store 240
int 1
int 0
load 244
int 2
==
load 243
int 2
==
||
select
int 0
load 242
int 2
==
select
store 239
load 241
int 0
==
store 238
load 240
int 0
==
store 237
load 239
int 0
==
store 236
load 254
int 2
*
store 235
load 254
load 235
load 237
load 236
&&
select
int 0
load 238
select
dup
bz l161
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l162
dig 1
gtxns FirstValid
<=
assert
b l163
l162:
pop
l163:
load 1
substring 8 16
btoi
dup
bz l164
dig 1
gtxns LastValid
>=
assert
b l165
l164:
pop
l165:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l161:
pop
load 254
load 235
load 238
load 236
&&
select
int 0
load 237
select
dup
bz l166
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l167
dig 1
gtxns FirstValid
<=
assert
b l168
l167:
pop
l168:
load 1
substring 8 16
btoi
dup
bz l169
dig 1
gtxns LastValid
>=
assert
b l170
l169:
pop
l170:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 252
dig 1
gtxns Receiver
==
assert
l166:
pop
load 254
load 235
load 238
load 237
&&
select
int 0
load 236
select
dup
bz l171
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l172
dig 1
gtxns FirstValid
<=
assert
b l173
l172:
pop
l173:
load 1
substring 8 16
btoi
dup
bz l174
dig 1
gtxns LastValid
>=
assert
b l175
l174:
pop
l175:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 251
dig 1
gtxns Receiver
==
assert
l171:
pop
load 254
dup
int 3
*
load 241
load 240
+
load 239
+
int 0
==
select
dup
bz l176
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l177
dig 1
gtxns FirstValid
<=
assert
b l178
l177:
pop
l178:
load 1
substring 8 16
btoi
dup
bz l179
dig 1
gtxns LastValid
>=
assert
b l180
l179:
pop
l180:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l176:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l182
dig 1
gtxns FirstValid
<=
assert
b l183
l182:
pop
l183:
load 1
substring 8 16
btoi
dup
bz l184
dig 1
gtxns LastValid
>=
assert
b l185
l184:
pop
l185:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l181:
pop
global ZeroAddress
store 2
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l156:
// Handler 16
dup
int 16
==
bz l186
pop
txna ApplicationArgs 1
dup
len
int 168
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 136
store 251
dup
substring 136 144
btoi
store 250
dup
substring 144 152
btoi
store 249
dup
substring 152 160
btoi
store 248
dup
substring 160 168
btoi
store 247
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 15
byte base64(AAAAAAAAAA8=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
load 248
itob
concat
load 247
itob
concat
sha256
load 2
==
assert
load 247
int 30
+
itob
int 8
bzero
concat
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l187
dig 1
gtxns FirstValid
<=
assert
b l188
l187:
pop
l188:
load 1
substring 8 16
btoi
dup
bz l189
dig 1
gtxns LastValid
>=
assert
b l190
l189:
pop
l190:
pop
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:133:37:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:133:37:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 250
dup
bz l191
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l192
dig 1
gtxns FirstValid
<=
assert
b l193
l192:
pop
l193:
load 1
substring 8 16
btoi
dup
bz l194
dig 1
gtxns LastValid
>=
assert
b l195
l194:
pop
l195:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l191:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
dup
load 1
substring 0 8
btoi
dup
bz l197
dig 1
gtxns FirstValid
<=
assert
b l198
l197:
pop
l198:
load 1
substring 8 16
btoi
dup
bz l199
dig 1
gtxns LastValid
>=
assert
b l200
l199:
pop
l200:
pop
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l196:
pop
global ZeroAddress
store 2
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l186:
int 0
assert
updateState:
byte base64()
load 2
load 3
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
byte base64()
int 64
bzero
app_global_put
b checkSize
ctor:
txn Sender
global CreatorAddress
==
assert
txna ApplicationArgs 1
store 3
// compute state in HM_Set 0
int 8
bzero
global Round
itob
concat
sha256
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
`,
  appClear: `#pragma version 4
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
global GroupSize
int 1
==
assert
byte base64()
app_global_get
substring 0 32
global ZeroAddress
==
assert
done:
int 1
`,
  escrow: `#pragma version 4
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  unsupported: [],
  version: 2,
  viewKeys: 0,
  viewSize: 0
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v22",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v95",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v108",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v114",
                "type": "uint256"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v108",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v114",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v117",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v122",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v123",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v114",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v117",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T30",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v114",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v123",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v126",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v132",
                "type": "uint256"
              }
            ],
            "internalType": "struct T31",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T32",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e15",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v114",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v123",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v126",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T33",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e16",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v38",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v44",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v38",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v92",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v95",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v105",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v22",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v95",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v108",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v114",
                "type": "uint256"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v108",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v114",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v117",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v122",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v123",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v114",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v117",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T30",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v114",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v123",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v126",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v132",
                "type": "uint256"
              }
            ],
            "internalType": "struct T31",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T32",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m15",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v114",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v123",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v126",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T33",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m16",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v38",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v44",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v38",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v92",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v35",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v43",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v46",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v95",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v105",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055612294806100826000396000f3fe6080604052600436106100f75760003560e01c80638fbcde711161008a578063e7cb55c611610059578063e7cb55c6146101e9578063ea10f6c5146101fc578063f2d7336e1461020f578063ffcb59e71461022257600080fd5b80638fbcde711461019d578063c1d7c8fc146101b0578063c1d82339146101c3578063c986ac21146101d657600080fd5b80635ebcacb6116100c65780635ebcacb61461015157806365574c58146101645780638341bee41461017757806384d663751461018a57600080fd5b8063268f46a1146101035780632781de1914610118578063550025251461012b57806356ed38b11461013e57600080fd5b366100fe57005b600080fd5b610116610111366004611c0b565b610235565b005b610116610126366004611b99565b610367565b610116610139366004611bc8565b610501565b61011661014c366004611b99565b6106ea565b61011661015f366004611b99565b610801565b610116610172366004611b99565b610909565b610116610185366004611bb6565b610a0b565b610116610198366004611c1d565b610af1565b6101166101ab366004611bf8565b610c8f565b6101166101be366004611b99565b6110d7565b6101166101d1366004611c1d565b6113a0565b6101166101e4366004611b99565b6114a2565b6101166101f7366004611b99565b61164e565b61011661020a366004611be5565b611756565b61011661021d366004611b99565b61185e565b610116610230366004611bc8565b6119f5565b6040805160006020820152823591810191909152610274906060016040516020818303038152906040528051906020012060001c600054146008611af8565b60008055610289346020830135146007611af8565b7f5244c8087eabae94fcf5dfc55baddf29bbd6458bdcb621946c68c9a140a5ac14816040516102b89190611f7d565b60405180910390a16040805160808101825260008183018190526060808301919091523382526020848101359083015290916102f8918401908401611b77565b6001600160a01b0390811660408381019182524360608086019182528251600160208083019190915287518716948201949094529286015190830152915190921660808301525160a082015260c0015b60408051601f1981840301815291905280516020909101206000555050565b6040516103a39061037f90600990849060200161200d565b6040516020818303038152906040528051906020012060001c600054146024611af8565b600080556103c26103b9601e60c08401356121ef565b43106025611af8565b6103ce34156022611af8565b6103f3336103e26080840160608501611b77565b6001600160a01b0316146023611af8565b7f3ea97205509db09492d904d8566fa29901eb8a5d7bd0e5b3f1f1ce981d590d32816040516104229190611eb1565b60405180910390a16040805160e08101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c08201529061046e90830183611b77565b6001600160a01b03168152602080830135908201526104936060830160408401611b77565b6001600160a01b031660408201526104b16080830160608401611b77565b6001600160a01b031660608201526104cf60a0830160808401611b77565b6001600160a01b0316608082015260a080830135908201524360c082015260405161034890600b908390602001612022565b60405161053d9061051990600d90849060200161209a565b6040516020818303038152906040528051906020012060001c600054146034611af8565b6000805561055c610553601e60e08401356121ef565b43106035611af8565b61056834156032611af8565b61058a336105796020840184611b77565b6001600160a01b0316146033611af8565b7f2d90f396011ab07864195fa5b9bf6f24180a63fa8a2c6f3578afe0547d058c11816040516105b99190611ece565b60405180910390a161063460405180610120016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b6106416020830183611b77565b6001600160a01b03168152602080830135908201526106666060830160408401611b77565b6001600160a01b031660408201526106846080830160608401611b77565b6001600160a01b031660608201526106a260a0830160808401611b77565b6001600160a01b0316608082015260a0808301359082015260c0808301359082015261012082013560e08201524361010082015260405161034890600f908390602001612144565b6040516107269061070290600390849060200161200d565b6040516020818303038152906040528051906020012060001c600054146015611af8565b6000805561074661073c601e60c08401356121ef565b4310156016611af8565b61075234156013611af8565b610777336107666080840160608501611b77565b6001600160a01b0316146014611af8565b6107876080820160608301611b77565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f193505050501580156107c2573d6000803e3d6000fd5b507f5248a86398b71c867c797701cd691e4ce8e10857353b8b55ae2d676b9f8af5f8816040516107f29190611e6c565b60405180910390a16000805533ff5b60405161083d9061081990600990849060200161200d565b6040516020818303038152906040528051906020012060001c600054146028611af8565b6000805561085d610853601e60c08401356121ef565b4310156029611af8565b61086934156026611af8565b61088e3361087d60a0840160808501611b77565b6001600160a01b0316146027611af8565b61089e60a0820160808301611b77565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f193505050501580156108d9573d6000803e3d6000fd5b507fd72e045067dd694cc6fa9fb5c2a8c1e44ebe299832fcf211107bb2078a0cd8f6816040516107f29190611e6c565b6040516109459061092190600b90849060200161200d565b6040516020818303038152906040528051906020012060001c600054146030611af8565b6000805561096561095b601e60c08401356121ef565b4310156031611af8565b6109713415602e611af8565b610993336109826020840184611b77565b6001600160a01b031614602f611af8565b6109a06020820182611b77565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f193505050501580156109db573d6000803e3d6000fd5b507f44d4e8fa15d7acccf8697c24e7a5f33c670b6de613479c08bd1dd4786ad873c9816040516107f29190611e6c565b604051610a4790610a239060059084906020016121db565b6040516020818303038152906040528051906020012060001c600054146019611af8565b60008055610a5734156017611af8565b610a7933610a686020840184611b77565b6001600160a01b0316146018611af8565b610a866020820182611b77565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f19350505050158015610ac1573d6000803e3d6000fd5b507f8f93e0bdafb0e0bd6dca9761bddd35b1b32b297da8b2ec25c1622ca30e51cac5816040516107f29190611e81565b604051610b2d90610b09906001908490602001612086565b6040516020818303038152906040528051906020012060001c60005414600a611af8565b60008080556040805160208101909152908152610b5b610b52601e60608501356121ef565b4310600b611af8565b610b696020830135806121ef565b8152610b7c346020840135146009611af8565b7f6699ea421761dac23e7bb3a7e767a7929f57d9696e127c4226009a8e2f78249982604051610bab9190611faf565b60405180910390a16040805160e08101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c082015290610bf790840184611b77565b6001600160a01b0316815260208084013590820152610c1c6060840160408501611b77565b6001600160a01b03166040820152336060820152610c4060a0840160808501611b77565b6001600160a01b03166080820152815160a08201524360c0820152604051610c6f906003908390602001612022565b60408051601f198184030181529190528051602090910120600055505050565b604051610ccb90610ca790600f90849060200161212f565b6040516020818303038152906040528051906020012060001c60005414603c611af8565b60008081905550610d2e604051806101400160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600015158152602001600015158152602001600015158152602001600081525090565b610d4a610d41601e6101008501356121ef565b4310603d611af8565b610d563415603a611af8565b610d7b33610d6a6080850160608601611b77565b6001600160a01b031614603b611af8565b610d8a600360e0840135612226565b8152610d9c6003610140840135612226565b6020820152610db0600360c0840135612226565b6040820152805115610de657602081015115610dd157604081015115610dd4565b60015b610ddf576001610de9565b6000610de9565b60005b60608201526020810151600114610e25578051600114610e10576001816040015114610e13565b60015b610e1e576001610e28565b6000610e28565b60005b60808201526040810151600214610e64578051600214610e4f576002816020015114610e52565b60015b610e5d576001610e67565b6000610e67565b60005b60a0820181905260608201511560c083015260808201511560e083015215610100820152610e9a60026020840135612207565b610120820152610ead6020830183611b77565b6001600160a01b03166108fc8260c00151610ef2578260e00151610ed2576000610ed9565b8261010001515b610ee7576020840135610ef5565b826101200151610ef5565b60005b6040518115909202916000818181858888f19350505050158015610f1d573d6000803e3d6000fd5b50610f2e6080830160608401611b77565b6001600160a01b03166108fc8260e00151610f73578260c00151610f53576000610f5a565b8261010001515b610f68576020840135610f76565b826101200151610f76565b60005b6040518115909202916000818181858888f19350505050158015610f9e573d6000803e3d6000fd5b50610faf60a0830160808401611b77565b6001600160a01b03166108fc826101000151610ff4578260c00151610fd5576000610fdb565b8260e001515b610fe9576020840135610ff7565b826101200151610ff7565b60005b6040518115909202916000818181858888f1935050505015801561101f573d6000803e3d6000fd5b506110306060830160408401611b77565b6001600160a01b03166108fc60008360a001518460800151856060015161105791906121ef565b61106191906121ef565b1461107057602084013561107f565b61107f60036020860135612207565b6040518115909202916000818181858888f193505050501580156110a7573d6000803e3d6000fd5b507f2133cb5ae498214b0f3bdf07edb839ce1d8581e66d4cb934145d3260d56552c2826040516107f29190611f2e565b604051611113906110ef90600390849060200161200d565b6040516020818303038152906040528051906020012060001c600054146011611af8565b60008080556040805160208101909152908152611141611138601e60c08501356121ef565b43106012611af8565b611153602083013560a08401356121ef565b8152611166346020840135146010611af8565b61117660a0830160808401611b77565b6001600160a01b031661118f6060840160408501611b77565b6001600160a01b0316146111a45760016111e6565b6111b5610100830160e08401611b77565b6001600160a01b03166111ce6060840160408501611b77565b6001600160a01b0316146111e35760016111e6565b60005b156112a9577f1daa171f63073210969b41262c81f22ccb3ae0b7141c98f96ccd0605543eb4cd8260405161121a9190611e3d565b60405180910390a161124f604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b61125c6020840184611b77565b6001600160a01b039081168252825160208084019182524360408086019182528051600593810193909352855190941693820193909352905160608201529051608082015260a001610c6f565b7f1daa171f63073210969b41262c81f22ccb3ae0b7141c98f96ccd0605543eb4cd826040516112d89190611e3d565b60405180910390a16040805160e08101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c08201529061132490840184611b77565b6001600160a01b03168152602080840135908201526113496060840160408501611b77565b6001600160a01b031660408201526113676080840160608501611b77565b6001600160a01b03166060820152336080820152815160a08201524360c0820152604051610c6f906007908390602001612022565b5050565b6040516113dc906113b8906001908490602001612086565b6040516020818303038152906040528051906020012060001c60005414600e611af8565b600080556113fc6113f2601e60608401356121ef565b431015600f611af8565b6114083415600c611af8565b61142a336114196020840184611b77565b6001600160a01b031614600d611af8565b6114376020820182611b77565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f19350505050158015611472573d6000803e3d6000fd5b507fbf4aa970276d46255077ef1eb805aea9165d6a1a04bb37b99855f1f39bf029fd816040516107f29190611fdd565b6040516114de906114ba90600b90849060200161200d565b6040516020818303038152906040528051906020012060001c60005414602c611af8565b600080556114fd6114f4601e60c08401356121ef565b4310602d611af8565b6115093415602a611af8565b61152e3361151d60a0840160808501611b77565b6001600160a01b031614602b611af8565b7f59519e1760e5d165540abcc4da6151f7cebaf1a2248c4ee9f26e7b16f51040ee8160405161155d9190611eb1565b60405180910390a1604080516101008101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c0820181905260e0820152906115b190830183611b77565b6001600160a01b03168152602080830135908201526115d66060830160408401611b77565b6001600160a01b031660408201526115f46080830160608401611b77565b6001600160a01b0316606082015261161260a0830160808401611b77565b6001600160a01b0316608082015260a0808301359082015260e08083013560c0830152439082015260405161034890600d9083906020016120af565b60405161168a9061166690600790849060200161200d565b6040516020818303038152906040528051906020012060001c600054146020611af8565b600080556116aa6116a0601e60c08401356121ef565b4310156021611af8565b6116b63415601e611af8565b6116db336116ca6080840160608501611b77565b6001600160a01b031614601f611af8565b6116eb6080820160608301611b77565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f19350505050158015611726573d6000803e3d6000fd5b507fcdc94d161cdc402d41035bc19c1ea0bda92e1a1a503cfee2f823c15b620bdec8816040516107f29190611e6c565b6040516117929061176e90600d90849060200161209a565b6040516020818303038152906040528051906020012060001c600054146038611af8565b600080556117b26117a8601e60e08401356121ef565b4310156039611af8565b6117be34156036611af8565b6117e3336117d260a0840160808501611b77565b6001600160a01b0316146037611af8565b6117f360a0820160808301611b77565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f1935050505015801561182e573d6000803e3d6000fd5b507fc8d75c006f7d0d30b09b864c470db97744544d5133e6382e368c6f5916b046e6816040516107f29190611efb565b60405161189a9061187690600790849060200161200d565b6040516020818303038152906040528051906020012060001c60005414601c611af8565b600080556118b96118b0601e60c08401356121ef565b4310601d611af8565b6118c53415601a611af8565b6118e7336118d66020840184611b77565b6001600160a01b031614601b611af8565b7f0da5fac9bb77efe4cf85be5b27390418d54966f742360e3a57cce36b3618566c816040516119169190611eb1565b60405180910390a16040805160e08101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c08201529061196290830183611b77565b6001600160a01b03168152602080830135908201526119876060830160408401611b77565b6001600160a01b031660408201526119a56080830160608401611b77565b6001600160a01b031660608201526119c360a0830160808401611b77565b6001600160a01b0316608082015260a080830135908201524360c0820152604051610348906009908390602001612022565b604051611a3190611a0d90600f90849060200161212f565b6040516020818303038152906040528051906020012060001c600054146040611af8565b60008055611a52611a48601e6101008401356121ef565b4310156041611af8565b611a5e3415603e611af8565b611a8033611a6f6020840184611b77565b6001600160a01b031614603f611af8565b611a8d6020820182611b77565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f19350505050158015611ac8573d6000803e3d6000fd5b507f51c95a35390c1f182f9cebe7e8fe375bf4b951e8f8fb8da860386aa512a08920816040516107f29190611f58565b8161139c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b80356001600160a01b0381168114611b3457600080fd5b919050565b60006101008284031215611b4c57600080fd5b50919050565b60006101408284031215611b4c57600080fd5b600060a08284031215611b4c57600080fd5b600060208284031215611b8957600080fd5b611b9282611b1d565b9392505050565b60006101008284031215611bac57600080fd5b611b928383611b39565b600060808284031215611b4c57600080fd5b60006101408284031215611bdb57600080fd5b611b928383611b52565b60006101208284031215611b4c57600080fd5b60006101608284031215611b4c57600080fd5b600060608284031215611b4c57600080fd5b600060a08284031215611c2f57600080fd5b611b928383611b65565b6001600160a01b0380611c4b83611b1d565b1683526020820135602084015280611c6560408401611b1d565b16604084015280611c7860608401611b1d565b16606084015280611c8b60808401611b1d565b1660808401525060a0818101359083015260c090810135910152565b611cb18282611c39565b60e0810135801515808214611cc557600080fd5b8060e085015250505050565b6001600160a01b0380611ce383611b1d565b1683526020820135602084015280611cfd60408401611b1d565b16604084015250606090810135910152565b6001600160a01b0380611d2183611b1d565b1683526020820135602084015280611d3b60408401611b1d565b16604084015280611d4e60608401611b1d565b16606084015280611d6160808401611b1d565b1660808401525060a081013560a083015260c081013560c083015260e081013560e08301525050565b6001600160a01b0380611d9c83611b1d565b1683526020820135602084015280611db660408401611b1d565b16604084015280611dc960608401611b1d565b16606084015250611ddc60808201611b1d565b6001600160a01b0316608083015260a0818101359083015260c0808201359083015260e0808201359083015261010090810135910152565b6001600160a01b03611e2582611b1d565b16825260208181013590830152604090810135910152565b6101008101611e4c8284611c39565b6001600160a01b03611e6060e08501611b1d565b1660e083015292915050565b6101008101611e7b8284611ca7565b92915050565b60808101611e8f8284611e14565b6060830135801515808214611ea357600080fd5b806060850152505092915050565b6101008101611ec08284611c39565b60e092830135919092015290565b6101408101611edd8284611d0f565b610100838101358382015261012080850135908401525b5092915050565b6101208101611f0a8284611d0f565b61010080840135801515808214611f2057600080fd5b808386015250505092915050565b6101608101611f3d8284611d8a565b61012083810135838201526101408085013590840152611ef4565b6101408101611f678284611d8a565b61012080840135801515808214611f2057600080fd5b8135815260208083013590820152606081016001600160a01b03611fa360408501611b1d565b16604083015292915050565b60a08101611fbd8284611cd1565b6001600160a01b03611fd160808501611b1d565b16608083015292915050565b60a08101611feb8284611cd1565b6080830135801515808214611fff57600080fd5b806080850152505092915050565b8281526101008101611b926020830184611c39565b8281526101008101611b92602083018460018060a01b03808251168352602082015160208401528060408301511660408401528060608301511660608401528060808301511660808401525060a081015160a083015260c081015160c08301525050565b82815260a08101611b926020830184611cd1565b8281526101208101611b926020830184611d0f565b60006101208201905083825260018060a01b038084511660208401526020840151604084015280604085015116606084015280606085015116608084015250608083015161210860a08401826001600160a01b03169052565b5060a083015160c083015260c083015160e083015260e08301516101008301529392505050565b8281526101408101611b926020830184611d8a565b60006101408201905083825260018060a01b038084511660208401526020840151604084015280604085015116606084015250606083015161219160808401826001600160a01b03169052565b5060808301516001600160a01b03811660a08401525060a083015160c083015260c083015160e083015260e083015161010081818501528085015161012085015250509392505050565b82815260808101611b926020830184611e14565b6000821982111561220257612202612248565b500190565b600081600019048311821515161561222157612221612248565b500290565b60008261224357634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220f8cc375ade08a55dcddd7ae5c8348bc1d54d2d64da07af8f356a646ed9ccecbf64736f6c63430008050033`,
  BytecodeLen: 8982,
  Which: `oD`,
  deployMode: `DM_constructor`,
  version: 1,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

