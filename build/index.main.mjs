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
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1, ctc1, ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc0, ctc0, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0]);
  
  
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
      
      sim_r.prevSt = stdlib.digest(ctc2, [stdlib.checkedBigNumberify('./index.rsh:49:5:dot', stdlib.UInt_max, 0), v22]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:49:5:dot', stdlib.UInt_max, 0)]);
      const [v27, v28] = txn1.data;
      const v31 = txn1.time;
      const v26 = txn1.from;
      
      sim_r.txns.push({
        amt: v27,
        kind: 'to',
        tok: undefined
        });
      sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:50:11:after expr stmt semicolon', stdlib.UInt_max, 1), v26, v27, v28, v31]);
      sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:50:11:after expr stmt semicolon', stdlib.UInt_max, 1), v26, v27, v28]);
      sim_r.view = [ctc8, [stdlib.checkedBigNumberify('./index.rsh:50:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
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
        
        sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v26, v27, v28, v31]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v26, v27, v28]);
        const [] = txn3.data;
        const v316 = txn3.time;
        const v313 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v315 = stdlib.addressEq(v26, v313);
        stdlib.assert(v315, {
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
        sim_r.nextSt = stdlib.digest(ctc5, []);
        sim_r.nextSt_noTime = stdlib.digest(ctc5, []);
        sim_r.view = [ctc5, []];
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeout_delay: false,
      tys: [ctc0, ctc1, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    const [] = txn3.data;
    const v316 = txn3.time;
    const v313 = txn3.from;
    ;
    const v315 = stdlib.addressEq(v26, v313);
    stdlib.assert(v315, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:58:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc4, await interact.informTimeout(), {
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
      const v294 = txn4.time;
      const v291 = txn4.from;
      ;
      const v293 = stdlib.addressEq(v35, v291);
      stdlib.assert(v293, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:69:14:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc4, await interact.informTimeout(), {
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
      const v51 = stdlib.protect(ctc1, await interact.getPlayerToShoot(), {
        at: './index.rsh:86:46:application',
        fs: ['at ./index.rsh:85:9:application call to [unknown function] (defined at: ./index.rsh:85:13:function exp)'],
        msg: 'getPlayerToShoot',
        who: 'Alice'
        });
      const v53 = stdlib.protect(ctc1, await interact.random(), {
        at: 'reach standard library:60:31:application',
        fs: ['at ./index.rsh:87:46:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:85:9:application call to [unknown function] (defined at: ./index.rsh:85:13:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v54 = stdlib.digest(ctc2, [v53, v51]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v26, v27, v28, v35, v43, v46, v47, v54],
        evt_cnt: 1,
        funcNum: 6,
        hasLastTime: stdlib.checkedBigNumberify('./index.rsh:90:5:dot', stdlib.UInt_max, 6),
        onlyIf: true,
        out_tys: [ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:90:5:dot', stdlib.UInt_max, 5), v26, v27, v28, v35, v43, v46, v47]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:90:5:dot', stdlib.UInt_max, 5), v26, v27, v28, v35, v43, v46]);
          const [v57] = txn4.data;
          const v60 = txn4.time;
          const v56 = txn4.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v59 = stdlib.addressEq(v26, v56);
          stdlib.assert(v59, {
            at: './index.rsh:90:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:93:11:after expr stmt semicolon', stdlib.UInt_max, 7), v26, v27, v28, v35, v43, v46, v60]);
          sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:93:11:after expr stmt semicolon', stdlib.UInt_max, 7), v26, v27, v28, v35, v43, v46]);
          sim_r.view = [ctc8, [stdlib.checkedBigNumberify('./index.rsh:93:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
        tys: [ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1, ctc3],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.recv({
          evt_cnt: 0,
          funcNum: 7,
          out_tys: [],
          timeout_delay: false,
          waitIfNotPresent: false
          }));
        const [] = txn5.data;
        const v272 = txn5.time;
        const v269 = txn5.from;
        ;
        const v271 = stdlib.addressEq(v35, v269);
        stdlib.assert(v271, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:92:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc4, await interact.informTimeout(), {
          at: './index.rsh:41:51:application',
          fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:92:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        }
      else {
        const [v57] = txn4.data;
        const v60 = txn4.time;
        const v56 = txn4.from;
        ;
        const v59 = stdlib.addressEq(v26, v56);
        stdlib.assert(v59, {
          at: './index.rsh:90:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const txn5 = await (ctc.recv({
          evt_cnt: 1,
          funcNum: 8,
          out_tys: [ctc3],
          timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.recv({
            evt_cnt: 0,
            funcNum: 9,
            out_tys: [],
            timeout_delay: false,
            waitIfNotPresent: false
            }));
          const [] = txn6.data;
          const v250 = txn6.time;
          const v247 = txn6.from;
          ;
          const v249 = stdlib.addressEq(v43, v247);
          stdlib.assert(v249, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:105:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc4, await interact.informTimeout(), {
            at: './index.rsh:41:51:application',
            fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:105:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          }
        else {
          const [v70] = txn5.data;
          const v73 = txn5.time;
          const v69 = txn5.from;
          ;
          const v72 = stdlib.addressEq(v35, v69);
          stdlib.assert(v72, {
            at: './index.rsh:103:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const txn6 = await (ctc.recv({
            evt_cnt: 1,
            funcNum: 10,
            out_tys: [ctc1],
            timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v26, v27, v28, v35, v43, v46, v73],
              evt_cnt: 0,
              funcNum: 11,
              hasLastTime: stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6),
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 9), v26, v27, v28, v35, v43, v46, v73]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 9), v26, v27, v28, v35, v43, v46]);
                const [] = txn7.data;
                const v228 = txn7.time;
                const v225 = txn7.from;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v227 = stdlib.addressEq(v26, v225);
                stdlib.assert(v227, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./index.rsh:116:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
            const [] = txn7.data;
            const v228 = txn7.time;
            const v225 = txn7.from;
            ;
            const v227 = stdlib.addressEq(v26, v225);
            stdlib.assert(v227, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:116:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc4, await interact.informTimeout(), {
              at: './index.rsh:41:51:application',
              fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:116:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            }
          else {
            const [v79] = txn6.data;
            const v82 = txn6.time;
            const v78 = txn6.from;
            ;
            const v81 = stdlib.addressEq(v43, v78);
            stdlib.assert(v81, {
              at: './index.rsh:114:5:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const txn7 = await (ctc.sendrecv({
              args: [v26, v27, v28, v35, v43, v46, v79, v82, v53, v51],
              evt_cnt: 2,
              funcNum: 12,
              hasLastTime: stdlib.checkedBigNumberify('./index.rsh:123:5:dot', stdlib.UInt_max, 7),
              onlyIf: true,
              out_tys: [ctc1, ctc1],
              pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:123:5:dot', stdlib.UInt_max, 11), v26, v27, v28, v35, v43, v46, v79, v82]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:123:5:dot', stdlib.UInt_max, 11), v26, v27, v28, v35, v43, v46, v79]);
                const [v87, v88] = txn7.data;
                const v91 = txn7.time;
                const v86 = txn7.from;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v90 = stdlib.addressEq(v26, v86);
                stdlib.assert(v90, {
                  at: './index.rsh:123:5:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:126:11:after expr stmt semicolon', stdlib.UInt_max, 13), v26, v27, v28, v35, v43, v46, v79, v88, v91]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:126:11:after expr stmt semicolon', stdlib.UInt_max, 13), v26, v27, v28, v35, v43, v46, v79, v88]);
                sim_r.view = [ctc8, [stdlib.checkedBigNumberify('./index.rsh:126:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
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
                funcNum: 13,
                out_tys: [],
                timeout_delay: false,
                waitIfNotPresent: false
                }));
              const [] = txn8.data;
              const v206 = txn8.time;
              const v203 = txn8.from;
              ;
              const v205 = stdlib.addressEq(v43, v203);
              stdlib.assert(v205, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:125:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc4, await interact.informTimeout(), {
                at: './index.rsh:41:51:application',
                fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:125:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              }
            else {
              const [v87, v88] = txn7.data;
              const v91 = txn7.time;
              const v86 = txn7.from;
              ;
              const v90 = stdlib.addressEq(v26, v86);
              stdlib.assert(v90, {
                at: './index.rsh:123:5:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const txn8 = await (ctc.recv({
                evt_cnt: 2,
                funcNum: 14,
                out_tys: [ctc1, ctc1],
                timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
                waitIfNotPresent: false
                }));
              if (txn8.didTimeout) {
                const txn9 = await (ctc.sendrecv({
                  args: [v26, v27, v28, v35, v43, v46, v79, v88, v91],
                  evt_cnt: 0,
                  funcNum: 15,
                  hasLastTime: stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8),
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                    
                    sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 13), v26, v27, v28, v35, v43, v46, v79, v88, v91]);
                    sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 13), v26, v27, v28, v35, v43, v46, v79, v88]);
                    const [] = txn9.data;
                    const v184 = txn9.time;
                    const v181 = txn9.from;
                    
                    sim_r.txns.push({
                      amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                      kind: 'to',
                      tok: undefined
                      });
                    const v183 = stdlib.addressEq(v26, v181);
                    stdlib.assert(v183, {
                      at: 'reach standard library:209:7:dot',
                      fs: ['at ./index.rsh:134:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
                    sim_r.nextSt = stdlib.digest(ctc5, []);
                    sim_r.nextSt_noTime = stdlib.digest(ctc5, []);
                    sim_r.view = [ctc5, []];
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: true,
                  timeout_delay: false,
                  tys: [ctc0, ctc1, ctc0, ctc0, ctc0, ctc1, ctc1, ctc1, ctc1],
                  waitIfNotPresent: false
                  }));
                const [] = txn9.data;
                const v184 = txn9.time;
                const v181 = txn9.from;
                ;
                const v183 = stdlib.addressEq(v26, v181);
                stdlib.assert(v183, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./index.rsh:134:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                ;
                stdlib.protect(ctc4, await interact.informTimeout(), {
                  at: './index.rsh:41:51:application',
                  fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:134:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Alice'
                  });
                
                return;
                }
              else {
                const [v96, v97] = txn8.data;
                const v100 = txn8.time;
                const v95 = txn8.from;
                ;
                const v99 = stdlib.addressEq(v35, v95);
                stdlib.assert(v99, {
                  at: './index.rsh:132:5:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                const v101 = stdlib.mod(v88, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                const v102 = stdlib.eq(v101, stdlib.checkedBigNumberify('./index.rsh:137:40:decimal', stdlib.UInt_max, 0));
                const v103 = stdlib.mod(v97, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                const v104 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:137:71:decimal', stdlib.UInt_max, 0));
                const v105 = stdlib.mod(v79, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                const v106 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:137:98:decimal', stdlib.UInt_max, 0));
                const v107 = v104 ? true : v106;
                const v108 = v107 ? stdlib.checkedBigNumberify('./index.rsh:137:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:137:107:decimal', stdlib.UInt_max, 1);
                const v109 = v102 ? stdlib.checkedBigNumberify('./index.rsh:137:44:decimal', stdlib.UInt_max, 0) : v108;
                const v111 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:138:40:decimal', stdlib.UInt_max, 1));
                const v113 = stdlib.eq(v101, stdlib.checkedBigNumberify('./index.rsh:138:71:decimal', stdlib.UInt_max, 1));
                const v115 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:138:98:decimal', stdlib.UInt_max, 1));
                const v116 = v113 ? true : v115;
                const v117 = v116 ? stdlib.checkedBigNumberify('./index.rsh:138:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:138:107:decimal', stdlib.UInt_max, 1);
                const v118 = v111 ? stdlib.checkedBigNumberify('./index.rsh:138:44:decimal', stdlib.UInt_max, 0) : v117;
                const v120 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:139:40:decimal', stdlib.UInt_max, 2));
                const v122 = stdlib.eq(v101, stdlib.checkedBigNumberify('./index.rsh:139:71:decimal', stdlib.UInt_max, 2));
                const v124 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:139:98:decimal', stdlib.UInt_max, 2));
                const v125 = v122 ? true : v124;
                const v126 = v125 ? stdlib.checkedBigNumberify('./index.rsh:139:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:139:107:decimal', stdlib.UInt_max, 1);
                const v127 = v120 ? stdlib.checkedBigNumberify('./index.rsh:139:44:decimal', stdlib.UInt_max, 0) : v126;
                const v128 = stdlib.add(v109, v118);
                const v129 = stdlib.add(v128, v127);
                const v134 = stdlib.eq(v109, stdlib.checkedBigNumberify('./index.rsh:145:20:decimal', stdlib.UInt_max, 0));
                const v135 = stdlib.eq(v118, stdlib.checkedBigNumberify('./index.rsh:145:37:decimal', stdlib.UInt_max, 0));
                const v136 = stdlib.eq(v127, stdlib.checkedBigNumberify('./index.rsh:145:50:decimal', stdlib.UInt_max, 0));
                const v137 = v135 ? v136 : false;
                const v138 = stdlib.mul(v27, stdlib.checkedBigNumberify('./index.rsh:145:63:decimal', stdlib.UInt_max, 3));
                const v139 = v137 ? v138 : v27;
                const v140 = v134 ? stdlib.checkedBigNumberify('./index.rsh:145:24:decimal', stdlib.UInt_max, 0) : v139;
                ;
                const v148 = v134 ? v136 : false;
                const v150 = v148 ? v138 : v27;
                const v151 = v135 ? stdlib.checkedBigNumberify('./index.rsh:146:24:decimal', stdlib.UInt_max, 0) : v150;
                ;
                const v159 = v134 ? v135 : false;
                const v161 = v159 ? v138 : v27;
                const v162 = v136 ? stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0) : v161;
                ;
                const v167 = stdlib.eq(v129, stdlib.checkedBigNumberify('./index.rsh:148:27:decimal', stdlib.UInt_max, 1));
                const v168 = stdlib.eq(v129, stdlib.checkedBigNumberify('./index.rsh:148:50:decimal', stdlib.UInt_max, 2));
                const v170 = v168 ? v27 : v138;
                const v171 = v167 ? stdlib.checkedBigNumberify('./index.rsh:148:31:decimal', stdlib.UInt_max, 0) : v170;
                ;
                return;}
              }
            }
          }
        }
      }
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
  const ctc11 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc0, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc0, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0]);
  
  
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
      
      sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:56:5:dot', stdlib.UInt_max, 1), v26, v27, v28, v31]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:56:5:dot', stdlib.UInt_max, 1), v26, v27, v28]);
      const [v36] = txn2.data;
      const v39 = txn2.time;
      const v35 = txn2.from;
      
      const v38 = stdlib.add(v27, v27);
      sim_r.txns.push({
        amt: v27,
        kind: 'to',
        tok: undefined
        });
      sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:59:11:after expr stmt semicolon', stdlib.UInt_max, 3), v26, v27, v28, v35, v38, v39]);
      sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:59:11:after expr stmt semicolon', stdlib.UInt_max, 3), v26, v27, v28, v35, v38]);
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
    const v316 = txn3.time;
    const v313 = txn3.from;
    ;
    const v315 = stdlib.addressEq(v26, v313);
    stdlib.assert(v315, {
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
        args: [v26, v27, v28, v35, v38, v39],
        evt_cnt: 0,
        funcNum: 5,
        hasLastTime: stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 5),
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 3), v26, v27, v28, v35, v38, v39]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 3), v26, v27, v28, v35, v38]);
          const [] = txn4.data;
          const v294 = txn4.time;
          const v291 = txn4.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v293 = stdlib.addressEq(v35, v291);
          stdlib.assert(v293, {
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
        tys: [ctc0, ctc1, ctc0, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const [] = txn4.data;
      const v294 = txn4.time;
      const v291 = txn4.from;
      ;
      const v293 = stdlib.addressEq(v35, v291);
      stdlib.assert(v293, {
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
      const txn4 = await (ctc.recv({
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc3],
        timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v26, v27, v28, v35, v43, v46, v47],
          evt_cnt: 0,
          funcNum: 7,
          hasLastTime: stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6),
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 5), v26, v27, v28, v35, v43, v46, v47]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 5), v26, v27, v28, v35, v43, v46]);
            const [] = txn5.data;
            const v272 = txn5.time;
            const v269 = txn5.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v271 = stdlib.addressEq(v35, v269);
            stdlib.assert(v271, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:92:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
        const v272 = txn5.time;
        const v269 = txn5.from;
        ;
        const v271 = stdlib.addressEq(v35, v269);
        stdlib.assert(v271, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:92:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:41:51:application',
          fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:92:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        }
      else {
        const [v57] = txn4.data;
        const v60 = txn4.time;
        const v56 = txn4.from;
        ;
        const v59 = stdlib.addressEq(v26, v56);
        stdlib.assert(v59, {
          at: './index.rsh:90:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v64 = stdlib.protect(ctc1, await interact.getPlayerToShoot(), {
          at: './index.rsh:99:46:application',
          fs: ['at ./index.rsh:98:9:application call to [unknown function] (defined at: ./index.rsh:98:13:function exp)'],
          msg: 'getPlayerToShoot',
          who: 'Bob'
          });
        const v66 = stdlib.protect(ctc1, await interact.random(), {
          at: 'reach standard library:60:31:application',
          fs: ['at ./index.rsh:100:46:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:98:9:application call to [unknown function] (defined at: ./index.rsh:98:13:function exp)'],
          msg: 'random',
          who: 'Bob'
          });
        const v67 = stdlib.digest(ctc4, [v66, v64]);
        
        const txn5 = await (ctc.sendrecv({
          args: [v26, v27, v28, v35, v43, v46, v60, v67],
          evt_cnt: 1,
          funcNum: 8,
          hasLastTime: stdlib.checkedBigNumberify('./index.rsh:103:5:dot', stdlib.UInt_max, 6),
          onlyIf: true,
          out_tys: [ctc3],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:103:5:dot', stdlib.UInt_max, 7), v26, v27, v28, v35, v43, v46, v60]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:103:5:dot', stdlib.UInt_max, 7), v26, v27, v28, v35, v43, v46]);
            const [v70] = txn5.data;
            const v73 = txn5.time;
            const v69 = txn5.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v72 = stdlib.addressEq(v35, v69);
            stdlib.assert(v72, {
              at: './index.rsh:103:5:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:106:11:after expr stmt semicolon', stdlib.UInt_max, 9), v26, v27, v28, v35, v43, v46, v73]);
            sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:106:11:after expr stmt semicolon', stdlib.UInt_max, 9), v26, v27, v28, v35, v43, v46]);
            sim_r.view = [ctc8, [stdlib.checkedBigNumberify('./index.rsh:106:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
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
            funcNum: 9,
            out_tys: [],
            timeout_delay: false,
            waitIfNotPresent: false
            }));
          const [] = txn6.data;
          const v250 = txn6.time;
          const v247 = txn6.from;
          ;
          const v249 = stdlib.addressEq(v43, v247);
          stdlib.assert(v249, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:105:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:41:51:application',
            fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:105:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          }
        else {
          const [v70] = txn5.data;
          const v73 = txn5.time;
          const v69 = txn5.from;
          ;
          const v72 = stdlib.addressEq(v35, v69);
          stdlib.assert(v72, {
            at: './index.rsh:103:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const txn6 = await (ctc.recv({
            evt_cnt: 1,
            funcNum: 10,
            out_tys: [ctc1],
            timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.recv({
              evt_cnt: 0,
              funcNum: 11,
              out_tys: [],
              timeout_delay: false,
              waitIfNotPresent: false
              }));
            const [] = txn7.data;
            const v228 = txn7.time;
            const v225 = txn7.from;
            ;
            const v227 = stdlib.addressEq(v26, v225);
            stdlib.assert(v227, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:116:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:41:51:application',
              fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:116:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            }
          else {
            const [v79] = txn6.data;
            const v82 = txn6.time;
            const v78 = txn6.from;
            ;
            const v81 = stdlib.addressEq(v43, v78);
            stdlib.assert(v81, {
              at: './index.rsh:114:5:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const txn7 = await (ctc.recv({
              evt_cnt: 2,
              funcNum: 12,
              out_tys: [ctc1, ctc1],
              timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.recv({
                evt_cnt: 0,
                funcNum: 13,
                out_tys: [],
                timeout_delay: false,
                waitIfNotPresent: false
                }));
              const [] = txn8.data;
              const v206 = txn8.time;
              const v203 = txn8.from;
              ;
              const v205 = stdlib.addressEq(v43, v203);
              stdlib.assert(v205, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:125:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc2, await interact.informTimeout(), {
                at: './index.rsh:41:51:application',
                fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:125:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              }
            else {
              const [v87, v88] = txn7.data;
              const v91 = txn7.time;
              const v86 = txn7.from;
              ;
              const v90 = stdlib.addressEq(v26, v86);
              stdlib.assert(v90, {
                at: './index.rsh:123:5:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const txn8 = await (ctc.sendrecv({
                args: [v26, v27, v28, v35, v43, v46, v79, v88, v91, v66, v64],
                evt_cnt: 2,
                funcNum: 14,
                hasLastTime: stdlib.checkedBigNumberify('./index.rsh:132:5:dot', stdlib.UInt_max, 8),
                onlyIf: true,
                out_tys: [ctc1, ctc1],
                pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:132:5:dot', stdlib.UInt_max, 13), v26, v27, v28, v35, v43, v46, v79, v88, v91]);
                  sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:132:5:dot', stdlib.UInt_max, 13), v26, v27, v28, v35, v43, v46, v79, v88]);
                  const [v96, v97] = txn8.data;
                  const v100 = txn8.time;
                  const v95 = txn8.from;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v99 = stdlib.addressEq(v35, v95);
                  stdlib.assert(v99, {
                    at: './index.rsh:132:5:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  const v101 = stdlib.mod(v88, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                  const v102 = stdlib.eq(v101, stdlib.checkedBigNumberify('./index.rsh:137:40:decimal', stdlib.UInt_max, 0));
                  const v103 = stdlib.mod(v97, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                  const v104 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:137:71:decimal', stdlib.UInt_max, 0));
                  const v105 = stdlib.mod(v79, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                  const v106 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:137:98:decimal', stdlib.UInt_max, 0));
                  const v107 = v104 ? true : v106;
                  const v108 = v107 ? stdlib.checkedBigNumberify('./index.rsh:137:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:137:107:decimal', stdlib.UInt_max, 1);
                  const v109 = v102 ? stdlib.checkedBigNumberify('./index.rsh:137:44:decimal', stdlib.UInt_max, 0) : v108;
                  const v111 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:138:40:decimal', stdlib.UInt_max, 1));
                  const v113 = stdlib.eq(v101, stdlib.checkedBigNumberify('./index.rsh:138:71:decimal', stdlib.UInt_max, 1));
                  const v115 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:138:98:decimal', stdlib.UInt_max, 1));
                  const v116 = v113 ? true : v115;
                  const v117 = v116 ? stdlib.checkedBigNumberify('./index.rsh:138:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:138:107:decimal', stdlib.UInt_max, 1);
                  const v118 = v111 ? stdlib.checkedBigNumberify('./index.rsh:138:44:decimal', stdlib.UInt_max, 0) : v117;
                  const v120 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:139:40:decimal', stdlib.UInt_max, 2));
                  const v122 = stdlib.eq(v101, stdlib.checkedBigNumberify('./index.rsh:139:71:decimal', stdlib.UInt_max, 2));
                  const v124 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:139:98:decimal', stdlib.UInt_max, 2));
                  const v125 = v122 ? true : v124;
                  const v126 = v125 ? stdlib.checkedBigNumberify('./index.rsh:139:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:139:107:decimal', stdlib.UInt_max, 1);
                  const v127 = v120 ? stdlib.checkedBigNumberify('./index.rsh:139:44:decimal', stdlib.UInt_max, 0) : v126;
                  const v128 = stdlib.add(v109, v118);
                  const v129 = stdlib.add(v128, v127);
                  const v134 = stdlib.eq(v109, stdlib.checkedBigNumberify('./index.rsh:145:20:decimal', stdlib.UInt_max, 0));
                  const v135 = stdlib.eq(v118, stdlib.checkedBigNumberify('./index.rsh:145:37:decimal', stdlib.UInt_max, 0));
                  const v136 = stdlib.eq(v127, stdlib.checkedBigNumberify('./index.rsh:145:50:decimal', stdlib.UInt_max, 0));
                  const v137 = v135 ? v136 : false;
                  const v138 = stdlib.mul(v27, stdlib.checkedBigNumberify('./index.rsh:145:63:decimal', stdlib.UInt_max, 3));
                  const v139 = v137 ? v138 : v27;
                  const v140 = v134 ? stdlib.checkedBigNumberify('./index.rsh:145:24:decimal', stdlib.UInt_max, 0) : v139;
                  sim_r.txns.push({
                    amt: v140,
                    kind: 'from',
                    to: v26,
                    tok: undefined
                    });
                  const v148 = v134 ? v136 : false;
                  const v150 = v148 ? v138 : v27;
                  const v151 = v135 ? stdlib.checkedBigNumberify('./index.rsh:146:24:decimal', stdlib.UInt_max, 0) : v150;
                  sim_r.txns.push({
                    amt: v151,
                    kind: 'from',
                    to: v35,
                    tok: undefined
                    });
                  const v159 = v134 ? v135 : false;
                  const v161 = v159 ? v138 : v27;
                  const v162 = v136 ? stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0) : v161;
                  sim_r.txns.push({
                    amt: v162,
                    kind: 'from',
                    to: v43,
                    tok: undefined
                    });
                  const v167 = stdlib.eq(v129, stdlib.checkedBigNumberify('./index.rsh:148:27:decimal', stdlib.UInt_max, 1));
                  const v168 = stdlib.eq(v129, stdlib.checkedBigNumberify('./index.rsh:148:50:decimal', stdlib.UInt_max, 2));
                  const v170 = v168 ? v27 : v138;
                  const v171 = v167 ? stdlib.checkedBigNumberify('./index.rsh:148:31:decimal', stdlib.UInt_max, 0) : v170;
                  sim_r.txns.push({
                    amt: v171,
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
                  funcNum: 15,
                  out_tys: [],
                  timeout_delay: false,
                  waitIfNotPresent: false
                  }));
                const [] = txn9.data;
                const v184 = txn9.time;
                const v181 = txn9.from;
                ;
                const v183 = stdlib.addressEq(v26, v181);
                stdlib.assert(v183, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./index.rsh:134:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                ;
                stdlib.protect(ctc2, await interact.informTimeout(), {
                  at: './index.rsh:41:51:application',
                  fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:134:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Bob'
                  });
                
                return;
                }
              else {
                const [v96, v97] = txn8.data;
                const v100 = txn8.time;
                const v95 = txn8.from;
                ;
                const v99 = stdlib.addressEq(v35, v95);
                stdlib.assert(v99, {
                  at: './index.rsh:132:5:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                const v101 = stdlib.mod(v88, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                const v102 = stdlib.eq(v101, stdlib.checkedBigNumberify('./index.rsh:137:40:decimal', stdlib.UInt_max, 0));
                const v103 = stdlib.mod(v97, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                const v104 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:137:71:decimal', stdlib.UInt_max, 0));
                const v105 = stdlib.mod(v79, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                const v106 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:137:98:decimal', stdlib.UInt_max, 0));
                const v107 = v104 ? true : v106;
                const v108 = v107 ? stdlib.checkedBigNumberify('./index.rsh:137:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:137:107:decimal', stdlib.UInt_max, 1);
                const v109 = v102 ? stdlib.checkedBigNumberify('./index.rsh:137:44:decimal', stdlib.UInt_max, 0) : v108;
                const v111 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:138:40:decimal', stdlib.UInt_max, 1));
                const v113 = stdlib.eq(v101, stdlib.checkedBigNumberify('./index.rsh:138:71:decimal', stdlib.UInt_max, 1));
                const v115 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:138:98:decimal', stdlib.UInt_max, 1));
                const v116 = v113 ? true : v115;
                const v117 = v116 ? stdlib.checkedBigNumberify('./index.rsh:138:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:138:107:decimal', stdlib.UInt_max, 1);
                const v118 = v111 ? stdlib.checkedBigNumberify('./index.rsh:138:44:decimal', stdlib.UInt_max, 0) : v117;
                const v120 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:139:40:decimal', stdlib.UInt_max, 2));
                const v122 = stdlib.eq(v101, stdlib.checkedBigNumberify('./index.rsh:139:71:decimal', stdlib.UInt_max, 2));
                const v124 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:139:98:decimal', stdlib.UInt_max, 2));
                const v125 = v122 ? true : v124;
                const v126 = v125 ? stdlib.checkedBigNumberify('./index.rsh:139:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:139:107:decimal', stdlib.UInt_max, 1);
                const v127 = v120 ? stdlib.checkedBigNumberify('./index.rsh:139:44:decimal', stdlib.UInt_max, 0) : v126;
                const v128 = stdlib.add(v109, v118);
                const v129 = stdlib.add(v128, v127);
                const v134 = stdlib.eq(v109, stdlib.checkedBigNumberify('./index.rsh:145:20:decimal', stdlib.UInt_max, 0));
                const v135 = stdlib.eq(v118, stdlib.checkedBigNumberify('./index.rsh:145:37:decimal', stdlib.UInt_max, 0));
                const v136 = stdlib.eq(v127, stdlib.checkedBigNumberify('./index.rsh:145:50:decimal', stdlib.UInt_max, 0));
                const v137 = v135 ? v136 : false;
                const v138 = stdlib.mul(v27, stdlib.checkedBigNumberify('./index.rsh:145:63:decimal', stdlib.UInt_max, 3));
                const v139 = v137 ? v138 : v27;
                const v140 = v134 ? stdlib.checkedBigNumberify('./index.rsh:145:24:decimal', stdlib.UInt_max, 0) : v139;
                ;
                const v148 = v134 ? v136 : false;
                const v150 = v148 ? v138 : v27;
                const v151 = v135 ? stdlib.checkedBigNumberify('./index.rsh:146:24:decimal', stdlib.UInt_max, 0) : v150;
                ;
                const v159 = v134 ? v135 : false;
                const v161 = v159 ? v138 : v27;
                const v162 = v136 ? stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0) : v161;
                ;
                const v167 = stdlib.eq(v129, stdlib.checkedBigNumberify('./index.rsh:148:27:decimal', stdlib.UInt_max, 1));
                const v168 = stdlib.eq(v129, stdlib.checkedBigNumberify('./index.rsh:148:50:decimal', stdlib.UInt_max, 2));
                const v170 = v168 ? v27 : v138;
                const v171 = v167 ? stdlib.checkedBigNumberify('./index.rsh:148:31:decimal', stdlib.UInt_max, 0) : v170;
                ;
                return;}
              }
            }
          }
        }
      }
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
  const ctc9 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc0, ctc1, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0, ctc0, ctc1]);
  
  
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
    const v316 = txn3.time;
    const v313 = txn3.from;
    ;
    const v315 = stdlib.addressEq(v26, v313);
    stdlib.assert(v315, {
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
      args: [v26, v27, v28, v35, v38, v39, v21],
      evt_cnt: 1,
      funcNum: 4,
      hasLastTime: stdlib.checkedBigNumberify('./index.rsh:65:5:dot', stdlib.UInt_max, 5),
      onlyIf: true,
      out_tys: [ctc0],
      pay: [v27, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:65:5:dot', stdlib.UInt_max, 3), v26, v27, v28, v35, v38, v39]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:65:5:dot', stdlib.UInt_max, 3), v26, v27, v28, v35, v38]);
        const [v44] = txn3.data;
        const v47 = txn3.time;
        const v43 = txn3.from;
        
        const v46 = stdlib.add(v38, v27);
        sim_r.txns.push({
          amt: v27,
          kind: 'to',
          tok: undefined
          });
        sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:82:11:after expr stmt semicolon', stdlib.UInt_max, 5), v26, v27, v28, v35, v43, v46, v47]);
        sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:82:11:after expr stmt semicolon', stdlib.UInt_max, 5), v26, v27, v28, v35, v43, v46]);
        sim_r.view = [ctc7, [stdlib.checkedBigNumberify('./index.rsh:82:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
      tys: [ctc0, ctc1, ctc0, ctc0, ctc1, ctc1, ctc0],
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
      const v294 = txn4.time;
      const v291 = txn4.from;
      ;
      const v293 = stdlib.addressEq(v35, v291);
      stdlib.assert(v293, {
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
      const txn4 = await (ctc.recv({
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc3],
        timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.recv({
          evt_cnt: 0,
          funcNum: 7,
          out_tys: [],
          timeout_delay: false,
          waitIfNotPresent: false
          }));
        const [] = txn5.data;
        const v272 = txn5.time;
        const v269 = txn5.from;
        ;
        const v271 = stdlib.addressEq(v35, v269);
        stdlib.assert(v271, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:92:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Carl'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:41:51:application',
          fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:92:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'Carl'
          });
        
        return;
        }
      else {
        const [v57] = txn4.data;
        const v60 = txn4.time;
        const v56 = txn4.from;
        ;
        const v59 = stdlib.addressEq(v26, v56);
        stdlib.assert(v59, {
          at: './index.rsh:90:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Carl'
          });
        const txn5 = await (ctc.recv({
          evt_cnt: 1,
          funcNum: 8,
          out_tys: [ctc3],
          timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v26, v27, v28, v35, v43, v46, v60],
            evt_cnt: 0,
            funcNum: 9,
            hasLastTime: stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6),
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 7), v26, v27, v28, v35, v43, v46, v60]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 7), v26, v27, v28, v35, v43, v46]);
              const [] = txn6.data;
              const v250 = txn6.time;
              const v247 = txn6.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v249 = stdlib.addressEq(v43, v247);
              stdlib.assert(v249, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:105:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
          const v250 = txn6.time;
          const v247 = txn6.from;
          ;
          const v249 = stdlib.addressEq(v43, v247);
          stdlib.assert(v249, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:105:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Carl'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:41:51:application',
            fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:105:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'Carl'
            });
          
          return;
          }
        else {
          const [v70] = txn5.data;
          const v73 = txn5.time;
          const v69 = txn5.from;
          ;
          const v72 = stdlib.addressEq(v35, v69);
          stdlib.assert(v72, {
            at: './index.rsh:103:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Carl'
            });
          const v77 = stdlib.protect(ctc1, await interact.getPlayerToShoot(), {
            at: './index.rsh:112:56:application',
            fs: ['at ./index.rsh:111:9:application call to [unknown function] (defined at: ./index.rsh:111:13:function exp)'],
            msg: 'getPlayerToShoot',
            who: 'Carl'
            });
          
          const txn6 = await (ctc.sendrecv({
            args: [v26, v27, v28, v35, v43, v46, v73, v77],
            evt_cnt: 1,
            funcNum: 10,
            hasLastTime: stdlib.checkedBigNumberify('./index.rsh:114:5:dot', stdlib.UInt_max, 6),
            onlyIf: true,
            out_tys: [ctc1],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:114:5:dot', stdlib.UInt_max, 9), v26, v27, v28, v35, v43, v46, v73]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:114:5:dot', stdlib.UInt_max, 9), v26, v27, v28, v35, v43, v46]);
              const [v79] = txn6.data;
              const v82 = txn6.time;
              const v78 = txn6.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v81 = stdlib.addressEq(v43, v78);
              stdlib.assert(v81, {
                at: './index.rsh:114:5:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Carl'
                });
              sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:117:11:after expr stmt semicolon', stdlib.UInt_max, 11), v26, v27, v28, v35, v43, v46, v79, v82]);
              sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:117:11:after expr stmt semicolon', stdlib.UInt_max, 11), v26, v27, v28, v35, v43, v46, v79]);
              sim_r.view = [ctc7, [stdlib.checkedBigNumberify('./index.rsh:117:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
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
              funcNum: 11,
              out_tys: [],
              timeout_delay: false,
              waitIfNotPresent: false
              }));
            const [] = txn7.data;
            const v228 = txn7.time;
            const v225 = txn7.from;
            ;
            const v227 = stdlib.addressEq(v26, v225);
            stdlib.assert(v227, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:116:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Carl'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:41:51:application',
              fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:116:39:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'Carl'
              });
            
            return;
            }
          else {
            const [v79] = txn6.data;
            const v82 = txn6.time;
            const v78 = txn6.from;
            ;
            const v81 = stdlib.addressEq(v43, v78);
            stdlib.assert(v81, {
              at: './index.rsh:114:5:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Carl'
              });
            const txn7 = await (ctc.recv({
              evt_cnt: 2,
              funcNum: 12,
              out_tys: [ctc1, ctc1],
              timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v26, v27, v28, v35, v43, v46, v79, v82],
                evt_cnt: 0,
                funcNum: 13,
                hasLastTime: stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 7),
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 11), v26, v27, v28, v35, v43, v46, v79, v82]);
                  sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 11), v26, v27, v28, v35, v43, v46, v79]);
                  const [] = txn8.data;
                  const v206 = txn8.time;
                  const v203 = txn8.from;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v205 = stdlib.addressEq(v43, v203);
                  stdlib.assert(v205, {
                    at: 'reach standard library:209:7:dot',
                    fs: ['at ./index.rsh:125:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
              const v206 = txn8.time;
              const v203 = txn8.from;
              ;
              const v205 = stdlib.addressEq(v43, v203);
              stdlib.assert(v205, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:125:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'Carl'
                });
              ;
              stdlib.protect(ctc2, await interact.informTimeout(), {
                at: './index.rsh:41:51:application',
                fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:125:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'informTimeout',
                who: 'Carl'
                });
              
              return;
              }
            else {
              const [v87, v88] = txn7.data;
              const v91 = txn7.time;
              const v86 = txn7.from;
              ;
              const v90 = stdlib.addressEq(v26, v86);
              stdlib.assert(v90, {
                at: './index.rsh:123:5:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Carl'
                });
              const txn8 = await (ctc.recv({
                evt_cnt: 2,
                funcNum: 14,
                out_tys: [ctc1, ctc1],
                timeout_delay: stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, 30),
                waitIfNotPresent: false
                }));
              if (txn8.didTimeout) {
                const txn9 = await (ctc.recv({
                  evt_cnt: 0,
                  funcNum: 15,
                  out_tys: [],
                  timeout_delay: false,
                  waitIfNotPresent: false
                  }));
                const [] = txn9.data;
                const v184 = txn9.time;
                const v181 = txn9.from;
                ;
                const v183 = stdlib.addressEq(v26, v181);
                stdlib.assert(v183, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./index.rsh:134:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Carl'
                  });
                ;
                stdlib.protect(ctc2, await interact.informTimeout(), {
                  at: './index.rsh:41:51:application',
                  fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:134:37:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Carl'
                  });
                
                return;
                }
              else {
                const [v96, v97] = txn8.data;
                const v100 = txn8.time;
                const v95 = txn8.from;
                ;
                const v99 = stdlib.addressEq(v35, v95);
                stdlib.assert(v99, {
                  at: './index.rsh:132:5:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Carl'
                  });
                const v101 = stdlib.mod(v88, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                const v102 = stdlib.eq(v101, stdlib.checkedBigNumberify('./index.rsh:137:40:decimal', stdlib.UInt_max, 0));
                const v103 = stdlib.mod(v97, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                const v104 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:137:71:decimal', stdlib.UInt_max, 0));
                const v105 = stdlib.mod(v79, stdlib.checkedBigNumberify('./index.rsh:6:19:decimal', stdlib.UInt_max, 3));
                const v106 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:137:98:decimal', stdlib.UInt_max, 0));
                const v107 = v104 ? true : v106;
                const v108 = v107 ? stdlib.checkedBigNumberify('./index.rsh:137:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:137:107:decimal', stdlib.UInt_max, 1);
                const v109 = v102 ? stdlib.checkedBigNumberify('./index.rsh:137:44:decimal', stdlib.UInt_max, 0) : v108;
                const v111 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:138:40:decimal', stdlib.UInt_max, 1));
                const v113 = stdlib.eq(v101, stdlib.checkedBigNumberify('./index.rsh:138:71:decimal', stdlib.UInt_max, 1));
                const v115 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:138:98:decimal', stdlib.UInt_max, 1));
                const v116 = v113 ? true : v115;
                const v117 = v116 ? stdlib.checkedBigNumberify('./index.rsh:138:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:138:107:decimal', stdlib.UInt_max, 1);
                const v118 = v111 ? stdlib.checkedBigNumberify('./index.rsh:138:44:decimal', stdlib.UInt_max, 0) : v117;
                const v120 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:139:40:decimal', stdlib.UInt_max, 2));
                const v122 = stdlib.eq(v101, stdlib.checkedBigNumberify('./index.rsh:139:71:decimal', stdlib.UInt_max, 2));
                const v124 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:139:98:decimal', stdlib.UInt_max, 2));
                const v125 = v122 ? true : v124;
                const v126 = v125 ? stdlib.checkedBigNumberify('./index.rsh:139:103:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:139:107:decimal', stdlib.UInt_max, 1);
                const v127 = v120 ? stdlib.checkedBigNumberify('./index.rsh:139:44:decimal', stdlib.UInt_max, 0) : v126;
                const v128 = stdlib.add(v109, v118);
                const v129 = stdlib.add(v128, v127);
                const v134 = stdlib.eq(v109, stdlib.checkedBigNumberify('./index.rsh:145:20:decimal', stdlib.UInt_max, 0));
                const v135 = stdlib.eq(v118, stdlib.checkedBigNumberify('./index.rsh:145:37:decimal', stdlib.UInt_max, 0));
                const v136 = stdlib.eq(v127, stdlib.checkedBigNumberify('./index.rsh:145:50:decimal', stdlib.UInt_max, 0));
                const v137 = v135 ? v136 : false;
                const v138 = stdlib.mul(v27, stdlib.checkedBigNumberify('./index.rsh:145:63:decimal', stdlib.UInt_max, 3));
                const v139 = v137 ? v138 : v27;
                const v140 = v134 ? stdlib.checkedBigNumberify('./index.rsh:145:24:decimal', stdlib.UInt_max, 0) : v139;
                ;
                const v148 = v134 ? v136 : false;
                const v150 = v148 ? v138 : v27;
                const v151 = v135 ? stdlib.checkedBigNumberify('./index.rsh:146:24:decimal', stdlib.UInt_max, 0) : v150;
                ;
                const v159 = v134 ? v135 : false;
                const v161 = v159 ? v138 : v27;
                const v162 = v136 ? stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0) : v161;
                ;
                const v167 = stdlib.eq(v129, stdlib.checkedBigNumberify('./index.rsh:148:27:decimal', stdlib.UInt_max, 1));
                const v168 = stdlib.eq(v129, stdlib.checkedBigNumberify('./index.rsh:148:50:decimal', stdlib.UInt_max, 2));
                const v170 = v168 ? v27 : v138;
                const v171 = v167 ? stdlib.checkedBigNumberify('./index.rsh:148:31:decimal', stdlib.UInt_max, 0) : v170;
                ;
                return;}
              }
            }
          }
        }
      }
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
int 120
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
substring 104 112
btoi
store 251
dup
substring 112 120
btoi
store 250
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 249
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
itob
concat
load 250
itob
concat
sha256
load 2
==
assert
int 8
bzero
load 250
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
load 251
load 254
+
store 248
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
// compute state in HM_Set 5
byte base64(AAAAAAAAAAU=)
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
l35:
// Handler 5
dup
int 5
==
bz l45
pop
txna ApplicationArgs 1
dup
len
int 120
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
substring 104 112
btoi
store 251
dup
substring 112 120
btoi
store 250
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
itob
concat
load 250
itob
concat
sha256
load 2
==
assert
load 250
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
bz l46
dig 1
gtxns FirstValid
<=
assert
b l47
l46:
pop
l47:
load 1
substring 8 16
btoi
dup
bz l48
dig 1
gtxns LastValid
>=
assert
b l49
l48:
pop
l49:
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
load 251
dup
bz l50
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
bz l51
dig 1
gtxns FirstValid
<=
assert
b l52
l51:
pop
l52:
load 1
substring 8 16
btoi
dup
bz l53
dig 1
gtxns LastValid
>=
assert
b l54
l53:
pop
l54:
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
l50:
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
bz l56
dig 1
gtxns FirstValid
<=
assert
b l57
l56:
pop
l57:
load 1
substring 8 16
btoi
dup
bz l58
dig 1
gtxns LastValid
>=
assert
b l59
l58:
pop
l59:
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
l55:
pop
global ZeroAddress
store 2
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l45:
// Handler 6
dup
int 6
==
bz l60
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
// compute state in HM_Check 5
byte base64(AAAAAAAAAAU=)
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
bz l61
dig 1
gtxns FirstValid
<=
assert
b l62
l61:
pop
l62:
load 1
substring 8 16
btoi
dup
bz l63
dig 1
gtxns LastValid
>=
assert
b l64
l63:
pop
l64:
pop
// "CheckPay"
// "./index.rsh:90:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:90:5:dot"
// "[]"
load 255
txn Sender
==
assert
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
l60:
// Handler 7
dup
int 7
==
bz l65
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
// compute state in HM_Check 5
byte base64(AAAAAAAAAAU=)
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
bz l66
dig 1
gtxns FirstValid
<=
assert
b l67
l66:
pop
l67:
load 1
substring 8 16
btoi
dup
bz l68
dig 1
gtxns LastValid
>=
assert
b l69
l68:
pop
l69:
pop
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:92:39:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:92:39:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 252
txn Sender
==
assert
load 250
dup
bz l70
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
bz l71
dig 1
gtxns FirstValid
<=
assert
b l72
l71:
pop
l72:
load 1
substring 8 16
btoi
dup
bz l73
dig 1
gtxns LastValid
>=
assert
b l74
l73:
pop
l74:
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
l70:
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
bz l76
dig 1
gtxns FirstValid
<=
assert
b l77
l76:
pop
l77:
load 1
substring 8 16
btoi
dup
bz l78
dig 1
gtxns LastValid
>=
assert
b l79
l78:
pop
l79:
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
l75:
pop
global ZeroAddress
store 2
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l65:
// Handler 8
dup
int 8
==
bz l80
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
bz l81
dig 1
gtxns FirstValid
<=
assert
b l82
l81:
pop
l82:
load 1
substring 8 16
btoi
dup
bz l83
dig 1
gtxns LastValid
>=
assert
b l84
l83:
pop
l84:
pop
// "CheckPay"
// "./index.rsh:103:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:103:5:dot"
// "[]"
load 252
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
l80:
// Handler 9
dup
int 9
==
bz l85
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
bz l86
dig 1
gtxns FirstValid
<=
assert
b l87
l86:
pop
l87:
load 1
substring 8 16
btoi
dup
bz l88
dig 1
gtxns LastValid
>=
assert
b l89
l88:
pop
l89:
pop
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:105:39:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:105:39:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 251
txn Sender
==
assert
load 250
dup
bz l90
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
bz l91
dig 1
gtxns FirstValid
<=
assert
b l92
l91:
pop
l92:
load 1
substring 8 16
btoi
dup
bz l93
dig 1
gtxns LastValid
>=
assert
b l94
l93:
pop
l94:
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
l90:
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
bz l96
dig 1
gtxns FirstValid
<=
assert
b l97
l96:
pop
l97:
load 1
substring 8 16
btoi
dup
bz l98
dig 1
gtxns LastValid
>=
assert
b l99
l98:
pop
l99:
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
l95:
pop
global ZeroAddress
store 2
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l85:
// Handler 10
dup
int 10
==
bz l100
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
bz l101
dig 1
gtxns FirstValid
<=
assert
b l102
l101:
pop
l102:
load 1
substring 8 16
btoi
dup
bz l103
dig 1
gtxns LastValid
>=
assert
b l104
l103:
pop
l104:
pop
// "CheckPay"
// "./index.rsh:114:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:114:5:dot"
// "[]"
load 251
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
l100:
// Handler 11
dup
int 11
==
bz l105
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
bz l106
dig 1
gtxns FirstValid
<=
assert
b l107
l106:
pop
l107:
load 1
substring 8 16
btoi
dup
bz l108
dig 1
gtxns LastValid
>=
assert
b l109
l108:
pop
l109:
pop
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:116:39:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:116:39:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 250
dup
bz l110
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
bz l111
dig 1
gtxns FirstValid
<=
assert
b l112
l111:
pop
l112:
load 1
substring 8 16
btoi
dup
bz l113
dig 1
gtxns LastValid
>=
assert
b l114
l113:
pop
l114:
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
l110:
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
bz l116
dig 1
gtxns FirstValid
<=
assert
b l117
l116:
pop
l117:
load 1
substring 8 16
btoi
dup
bz l118
dig 1
gtxns LastValid
>=
assert
b l119
l118:
pop
l119:
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
l115:
pop
global ZeroAddress
store 2
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l105:
// Handler 12
dup
int 12
==
bz l120
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
bz l121
dig 1
gtxns FirstValid
<=
assert
b l122
l121:
pop
l122:
load 1
substring 8 16
btoi
dup
bz l123
dig 1
gtxns LastValid
>=
assert
b l124
l123:
pop
l124:
pop
// "CheckPay"
// "./index.rsh:123:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:123:5:dot"
// "[]"
load 255
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
l120:
// Handler 13
dup
int 13
==
bz l125
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
bz l126
dig 1
gtxns FirstValid
<=
assert
b l127
l126:
pop
l127:
load 1
substring 8 16
btoi
dup
bz l128
dig 1
gtxns LastValid
>=
assert
b l129
l128:
pop
l129:
pop
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:125:37:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:125:37:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 251
txn Sender
==
assert
load 250
dup
bz l130
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
bz l131
dig 1
gtxns FirstValid
<=
assert
b l132
l131:
pop
l132:
load 1
substring 8 16
btoi
dup
bz l133
dig 1
gtxns LastValid
>=
assert
b l134
l133:
pop
l134:
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
l130:
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
bz l136
dig 1
gtxns FirstValid
<=
assert
b l137
l136:
pop
l137:
load 1
substring 8 16
btoi
dup
bz l138
dig 1
gtxns LastValid
>=
assert
b l139
l138:
pop
l139:
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
l135:
pop
global ZeroAddress
store 2
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l125:
// Handler 14
dup
int 14
==
bz l140
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
bz l141
dig 1
gtxns FirstValid
<=
assert
b l142
l141:
pop
l142:
load 1
substring 8 16
btoi
dup
bz l143
dig 1
gtxns LastValid
>=
assert
b l144
l143:
pop
l144:
pop
// "CheckPay"
// "./index.rsh:132:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:132:5:dot"
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
load 240
+
load 239
+
store 238
load 241
int 0
==
store 237
load 240
int 0
==
store 236
load 239
int 0
==
store 235
load 254
int 3
*
store 234
load 254
load 234
load 236
load 235
&&
select
int 0
load 237
select
dup
bz l145
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
bz l146
dig 1
gtxns FirstValid
<=
assert
b l147
l146:
pop
l147:
load 1
substring 8 16
btoi
dup
bz l148
dig 1
gtxns LastValid
>=
assert
b l149
l148:
pop
l149:
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
l145:
pop
load 254
load 234
load 237
load 235
&&
select
int 0
load 236
select
dup
bz l150
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
bz l151
dig 1
gtxns FirstValid
<=
assert
b l152
l151:
pop
l152:
load 1
substring 8 16
btoi
dup
bz l153
dig 1
gtxns LastValid
>=
assert
b l154
l153:
pop
l154:
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
l150:
pop
load 254
load 234
load 237
load 236
&&
select
int 0
load 235
select
dup
bz l155
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
bz l156
dig 1
gtxns FirstValid
<=
assert
b l157
l156:
pop
l157:
load 1
substring 8 16
btoi
dup
bz l158
dig 1
gtxns LastValid
>=
assert
b l159
l158:
pop
l159:
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
l155:
pop
load 234
load 254
load 238
int 2
==
select
int 0
load 238
int 1
==
select
dup
bz l160
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
bz l161
dig 1
gtxns FirstValid
<=
assert
b l162
l161:
pop
l162:
load 1
substring 8 16
btoi
dup
bz l163
dig 1
gtxns LastValid
>=
assert
b l164
l163:
pop
l164:
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
l160:
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
bz l166
dig 1
gtxns FirstValid
<=
assert
b l167
l166:
pop
l167:
load 1
substring 8 16
btoi
dup
bz l168
dig 1
gtxns LastValid
>=
assert
b l169
l168:
pop
l169:
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
l165:
pop
global ZeroAddress
store 2
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l140:
// Handler 15
dup
int 15
==
bz l170
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
bz l171
dig 1
gtxns FirstValid
<=
assert
b l172
l171:
pop
l172:
load 1
substring 8 16
btoi
dup
bz l173
dig 1
gtxns LastValid
>=
assert
b l174
l173:
pop
l174:
pop
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:134:37:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:134:37:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 250
dup
bz l175
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
bz l176
dig 1
gtxns FirstValid
<=
assert
b l177
l176:
pop
l177:
load 1
substring 8 16
btoi
dup
bz l178
dig 1
gtxns LastValid
>=
assert
b l179
l178:
pop
l179:
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
l175:
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
bz l181
dig 1
gtxns FirstValid
<=
assert
b l182
l181:
pop
l182:
load 1
substring 8 16
btoi
dup
bz l183
dig 1
gtxns LastValid
>=
assert
b l184
l183:
pop
l184:
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
l180:
pop
global ZeroAddress
store 2
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l170:
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
                "name": "v73",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
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
                "name": "v73",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
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
        "internalType": "struct T24",
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
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v87",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v88",
                "type": "uint256"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
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
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
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
        "internalType": "struct T28",
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
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v88",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v91",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v97",
                "type": "uint256"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
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
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v88",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v91",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
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
        "internalType": "struct T31",
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
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
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
        "internalType": "struct T12",
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
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v57",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
        "internalType": "struct T16",
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
                "name": "v60",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v70",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
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
                "name": "v60",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
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
        "internalType": "struct T20",
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
                "name": "v73",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
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
                "name": "v73",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T24",
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
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v87",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v88",
                "type": "uint256"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
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
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T28",
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
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v88",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v91",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v97",
                "type": "uint256"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
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
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v88",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v91",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T31",
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
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
        "internalType": "struct T12",
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
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v57",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
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
        "internalType": "struct T16",
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
                "name": "v60",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v70",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
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
                "name": "v60",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T20",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051602080820183524382528251808201845260008082529251815283518083018490529051818501528351808203850181526060909101909352825192019190912090556120df806100826000396000f3fe6080604052600436106100eb5760003560e01c806384d663751161008a578063c1d8233911610059578063c1d82339146101ca578063d6562c0b146101dd578063fa6f50d5146101f0578063fe88aa451461020357600080fd5b806384d663751461017e57806388e57400146101915780638c47373c146101a4578063a41f38de146101b757600080fd5b8063268f46a1116100c6578063268f46a11461013257806340e051f11461014557806374a0253214610158578063833015d41461016b57600080fd5b80626704e5146100f75780630424c8d01461010c5780631b4ea9841461011f57600080fd5b366100f257005b600080fd5b61010a6101053660046119e2565b610216565b005b61010a61011a3660046119c5565b61041e565b61010a61012d3660046119a9565b6105ca565b61010a610140366004611a25565b61076c565b61010a6101533660046119c5565b610883565b61010a6101663660046119c5565b61099a565b61010a6101793660046119a9565b610b34565b61010a61018c366004611a37565b610c3c565b61010a61019f3660046119e2565b610ddc565b61010a6101b23660046119c5565b610edf565b61010a6101c5366004611a12565b610fe1565b61010a6101d8366004611a37565b611449565b61010a6101eb3660046119c5565b61154b565b61010a6101fe3660046119ff565b6116e2565b61010a6102113660046119c5565b6117ea565b6040516102529061022e90600b908490602001611ee5565b6040516020818303038152906040528051906020012060001c6000541460316118f2565b60008055610271610268601e60e084013561203a565b431060326118f2565b61027d3415602f6118f2565b61029f3361028e6020840184611987565b6001600160a01b03161460306118f2565b7f370996118b939c277b0ce74085887cc8c225d6f799ecf8c0d24ec7c8622f23b3816040516102ce9190611d19565b60405180910390a161034960405180610120016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b6103566020830183611987565b6001600160a01b031681526020808301359082015261037b6060830160408401611987565b6001600160a01b031660408201526103996080830160608401611987565b6001600160a01b031660608201526103b760a0830160808401611987565b6001600160a01b0316608082015260a0808301359082015260c0808301359082015261012082013560e0820152436101008201526040516103ff90600d908390602001611f8f565b60408051601f1981840301815291905280516020909101206000555050565b60405161045a90610436906009908490602001611e58565b6040516020818303038152906040528051906020012060001c6000541460296118f2565b60008055610479610470601e60c084013561203a565b4310602a6118f2565b610485341560276118f2565b6104aa3361049960a0840160808501611987565b6001600160a01b03161460286118f2565b7f9e72c9353592ce5723e00fa20c60af2dac72bb086db31437d4fc585b83457f65816040516104d99190611ce7565b60405180910390a1604080516101008101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c0820181905260e08201529061052d90830183611987565b6001600160a01b03168152602080830135908201526105526060830160408401611987565b6001600160a01b031660408201526105706080830160608401611987565b6001600160a01b0316606082015261058e60a0830160808401611987565b6001600160a01b0316608082015260a0808301359082015260e08083013560c083015243908201526040516103ff90600b908390602001611efa565b604051610606906105e2906003908490602001612026565b6040516020818303038152906040528051906020012060001c6000541460116118f2565b6000808055604080516020810190915290815261063461062b601e60a085013561203a565b431060126118f2565b6106466020830135608084013561203a565b81526106593460208401351460106118f2565b7fe97680536d8480cce016aede9aadd59de4eb3c97a2f0bef9d14ddeb750b9d5f3826040516106889190611c89565b60405180910390a16040805160e08101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c0820152906106d490840184611987565b6001600160a01b03168152602080840135908201526106f96060840160408501611987565b6001600160a01b031660408201526107176080840160608501611987565b6001600160a01b03166060820152336080820152815160a08201524360c082015260405161074c906005908390602001611e6d565b60408051601f198184030181529190528051602090910120600055505050565b60408051600060208201528235918101919091526107ab906060016040516020818303038152906040528051906020012060001c6000541460086118f2565b600080556107c03460208301351460076118f2565b7f5244c8087eabae94fcf5dfc55baddf29bbd6458bdcb621946c68c9a140a5ac14816040516107ef9190611dc8565b60405180910390a160408051608081018252600081830181905260608083019190915233825260208481013590830152909161082f918401908401611987565b6001600160a01b0390811660408381019182524360608086019182528251600160208083019190915287518716948201949094529286015190830152915190921660808301525160a082015260c0016103ff565b6040516108bf9061089b906005908490602001611e58565b6040516020818303038152906040528051906020012060001c60005414601d6118f2565b600080556108df6108d5601e60c084013561203a565b431015601e6118f2565b6108eb3415601b6118f2565b610910336108ff6080840160608501611987565b6001600160a01b031614601c6118f2565b6109206080820160608301611987565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f1935050505015801561095b573d6000803e3d6000fd5b507f064e1e8874e298a1b93f3408e50f0f731f658b10ec3af81049967c4dd55b61018160405161098b9190611d04565b60405180910390a16000805533ff5b6040516109d6906109b2906007908490602001611e58565b6040516020818303038152906040528051906020012060001c6000541460216118f2565b600080556109f56109ec601e60c084013561203a565b431060226118f2565b610a013415601f6118f2565b610a2633610a156080840160608501611987565b6001600160a01b03161460206118f2565b7f964076a46c082d38629e74068d64a72fb0598e037f4796fd688f79b4db3ca21a81604051610a559190611ce7565b60405180910390a16040805160e08101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c082015290610aa190830183611987565b6001600160a01b0316815260208083013590820152610ac66060830160408401611987565b6001600160a01b03166040820152610ae46080830160608401611987565b6001600160a01b03166060820152610b0260a0830160808401611987565b6001600160a01b0316608082015260a080830135908201524360c08201526040516103ff906009908390602001611e6d565b604051610b7090610b4c906003908490602001612026565b6040516020818303038152906040528051906020012060001c6000541460156118f2565b60008055610b90610b86601e60a084013561203a565b43101560166118f2565b610b9c341560136118f2565b610bc133610bb06080840160608501611987565b6001600160a01b03161460146118f2565b610bd16080820160608301611987565b6040516001600160a01b039190911690608083013580156108fc02916000818181858888f19350505050158015610c0c573d6000803e3d6000fd5b507f6a879ded89a306ded198b7260818272b7098217590a7dcffb9b301f03cbdc6dc8160405161098b9190611cb7565b604051610c7890610c54906001908490602001611ed1565b6040516020818303038152906040528051906020012060001c60005414600a6118f2565b60008080556040805160208101909152908152610ca6610c9d601e606085013561203a565b4310600b6118f2565b610cb460208301358061203a565b8152610cc73460208401351460096118f2565b7f6699ea421761dac23e7bb3a7e767a7929f57d9696e127c4226009a8e2f78249982604051610cf69190611dfa565b60405180910390a16040805160c08101825260008082526020808301829052928201819052606082018190526080820181905260a082015290610d3b90840184611987565b6001600160a01b0316815260208084013590820152610d606060840160408501611987565b6001600160a01b039081166040838101918252336060808601918252865160808088019182524360a0808a01918252865160036020808301919091528b518b1698820198909852968a0151948701949094529551871690850152915190941693820193909352915160c08301525160e08201526101000161074c565b604051610e1890610df490600d908490602001611f7a565b6040516020818303038152906040528051906020012060001c60005414603d6118f2565b60008055610e39610e2f601e61010084013561203a565b431015603e6118f2565b610e453415603b6118f2565b610e6733610e566020840184611987565b6001600160a01b031614603c6118f2565b610e746020820182611987565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f19350505050158015610eaf573d6000803e3d6000fd5b507f7cc14ec1945dfb833ef2761061c9fc9672386bea661c78c1303b63094bedb3a78160405161098b9190611da3565b604051610f1b90610ef7906009908490602001611e58565b6040516020818303038152906040528051906020012060001c60005414602d6118f2565b60008055610f3b610f31601e60c084013561203a565b431015602e6118f2565b610f473415602b6118f2565b610f6933610f586020840184611987565b6001600160a01b031614602c6118f2565b610f766020820182611987565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f19350505050158015610fb1573d6000803e3d6000fd5b507f207bbfdf67d79db7f2b5507779c031566571651575e68d0d96889f60b9a778618160405161098b9190611d04565b60405161101d90610ff990600d908490602001611f7a565b6040516020818303038152906040528051906020012060001c6000541460396118f2565b6000808190555061108760405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600015158152602001600015158152602001600015158152602001600081525090565b6110a361109a601e61010085013561203a565b4310603a6118f2565b6110af341560376118f2565b6110d4336110c36080850160608601611987565b6001600160a01b03161460386118f2565b6110e3600360e0840135612071565b81526110f56003610140840135612071565b6020820152611109600360c0840135612071565b604082015280511561113f5760208101511561112a5760408101511561112d565b60015b611138576001611142565b6000611142565b60005b6060820152602081015160011461117e57805160011461116957600181604001511461116c565b60015b611177576001611181565b6000611181565b60005b608082015260408101516002146111bd5780516002146111a85760028160200151146111ab565b60015b6111b65760016111c0565b60006111c0565b60005b60a08201819052608082015160608301516111db919061203a565b6111e5919061203a565b60c082015260608101511560e082015260808101511561010082015260a08101511561012082015261121c60036020840135612052565b61014082015261122f6020830183611987565b6001600160a01b03166108fc8260e001516112755782610100015161125557600061125c565b8261012001515b61126a576020840135611278565b826101400151611278565b60005b6040518115909202916000818181858888f193505050501580156112a0573d6000803e3d6000fd5b506112b16080830160608401611987565b6001600160a01b03166108fc8261010001516112f7578260e001516112d75760006112de565b8261012001515b6112ec5760208401356112fa565b8261014001516112fa565b60005b6040518115909202916000818181858888f19350505050158015611322573d6000803e3d6000fd5b5061133360a0830160808401611987565b6001600160a01b03166108fc826101200151611379578260e00151611359576000611360565b8261010001515b61136e57602084013561137c565b82610140015161137c565b60005b6040518115909202916000818181858888f193505050501580156113a4573d6000803e3d6000fd5b506113b56060830160408401611987565b6001600160a01b03166108fc60018360c00151146113ee5760028360c00151146113e4578261014001516113f1565b60208401356113f1565b60005b6040518115909202916000818181858888f19350505050158015611419573d6000803e3d6000fd5b507f7735d88fa3f5c7468172753d4efeeae0699b4239ee74560e8e909b25fcd67df98260405161098b9190611d79565b60405161148590611461906001908490602001611ed1565b6040516020818303038152906040528051906020012060001c60005414600e6118f2565b600080556114a561149b601e606084013561203a565b431015600f6118f2565b6114b13415600c6118f2565b6114d3336114c26020840184611987565b6001600160a01b031614600d6118f2565b6114e06020820182611987565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f1935050505015801561151b573d6000803e3d6000fd5b507fbf4aa970276d46255077ef1eb805aea9165d6a1a04bb37b99855f1f39bf029fd8160405161098b9190611e28565b60405161158790611563906005908490602001611e58565b6040516020818303038152906040528051906020012060001c6000541460196118f2565b600080556115a661159d601e60c084013561203a565b4310601a6118f2565b6115b2341560176118f2565b6115d4336115c36020840184611987565b6001600160a01b03161460186118f2565b7fadd112da6d744e0f1096af15bffa11dc3d48c643e646f9fdf2da07bd8cc8cb53816040516116039190611ce7565b60405180910390a16040805160e08101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c08201529061164f90830183611987565b6001600160a01b03168152602080830135908201526116746060830160408401611987565b6001600160a01b031660408201526116926080830160608401611987565b6001600160a01b031660608201526116b060a0830160808401611987565b6001600160a01b0316608082015260a080830135908201524360c08201526040516103ff906007908390602001611e6d565b60405161171e906116fa90600b908490602001611ee5565b6040516020818303038152906040528051906020012060001c6000541460356118f2565b6000805561173e611734601e60e084013561203a565b43101560366118f2565b61174a341560336118f2565b61176f3361175e60a0840160808501611987565b6001600160a01b03161460346118f2565b61177f60a0820160808301611987565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f193505050501580156117ba573d6000803e3d6000fd5b507f67a7172911608f083a148a4c48c51c0135421a15bc1471a62681a1c61dc4e2598160405161098b9190611d46565b60405161182690611802906007908490602001611e58565b6040516020818303038152906040528051906020012060001c6000541460256118f2565b6000805561184661183c601e60c084013561203a565b43101560266118f2565b611852341560236118f2565b6118773361186660a0840160808501611987565b6001600160a01b03161460246118f2565b61188760a0820160808301611987565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f193505050501580156118c2573d6000803e3d6000fd5b507f2330ef1b304d8e4b956176be0e89e1c50dd8970aa313131f3c44c4b655cca88f8160405161098b9190611d04565b816119175760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b80356001600160a01b038116811461193257600080fd5b919050565b600060e0828403121561194957600080fd5b50919050565b6000610100828403121561194957600080fd5b6000610140828403121561194957600080fd5b600060a0828403121561194957600080fd5b60006020828403121561199957600080fd5b6119a28261191b565b9392505050565b600060e082840312156119bb57600080fd5b6119a28383611937565b600061010082840312156119d857600080fd5b6119a2838361194f565b600061014082840312156119f557600080fd5b6119a28383611962565b6000610120828403121561194957600080fd5b6000610160828403121561194957600080fd5b60006060828403121561194957600080fd5b600060a08284031215611a4957600080fd5b6119a28383611975565b6001600160a01b0380611a658361191b565b1683526020820135602084015280611a7f6040840161191b565b16604084015280611a926060840161191b565b16606084015280611aa56080840161191b565b1660808401525060a0818101359083015260c090810135910152565b611acb8282611a53565b60e0810135801515808214611adf57600080fd5b8060e085015250505050565b6001600160a01b0380611afd8361191b565b1683526020820135602084015280611b176040840161191b565b16604084015250606090810135910152565b6001600160a01b0380611b3b8361191b565b1683526020820135602084015280611b556040840161191b565b16604084015280611b686060840161191b565b16606084015280611b7b6080840161191b565b1660808401525060a081013560a083015260c081013560c083015260e081013560e08301525050565b6001600160a01b0380611bb68361191b565b1683526020820135602084015280611bd06040840161191b565b16604084015280611be36060840161191b565b16606084015250611bf66080820161191b565b6001600160a01b0316608083015260a0818101359083015260c0808201359083015260e0808201359083015261010090810135910152565b6001600160a01b0380611c408361191b565b1683526020820135602084015280611c5a6040840161191b565b16604084015280611c6d6060840161191b565b166060840152506080818101359083015260a090810135910152565b60e08101611c978284611c2e565b6001600160a01b03611cab60c0850161191b565b1660c083015292915050565b60e08101611cc58284611c2e565b60c0830135801515808214611cd957600080fd5b8060c0850152505092915050565b6101008101611cf68284611a53565b60e092830135919092015290565b6101008101611d138284611ac1565b92915050565b6101408101611d288284611b29565b610100838101358382015261012080850135908401525b5092915050565b6101208101611d558284611b29565b61010080840135801515808214611d6b57600080fd5b808386015250505092915050565b6101608101611d888284611ba4565b61012083810135838201526101408085013590840152611d3f565b6101408101611db28284611ba4565b61012080840135801515808214611d6b57600080fd5b8135815260208083013590820152606081016001600160a01b03611dee6040850161191b565b16604083015292915050565b60a08101611e088284611aeb565b6001600160a01b03611e1c6080850161191b565b16608083015292915050565b60a08101611e368284611aeb565b6080830135801515808214611e4a57600080fd5b806080850152505092915050565b82815261010081016119a26020830184611a53565b82815261010081016119a2602083018460018060a01b03808251168352602082015160208401528060408301511660408401528060608301511660608401528060808301511660808401525060a081015160a083015260c081015160c08301525050565b82815260a081016119a26020830184611aeb565b82815261012081016119a26020830184611b29565b60006101208201905083825260018060a01b0380845116602084015260208401516040840152806040850151166060840152806060850151166080840152506080830151611f5360a08401826001600160a01b03169052565b5060a083015160c083015260c083015160e083015260e08301516101008301529392505050565b82815261014081016119a26020830184611ba4565b60006101408201905083825260018060a01b0380845116602084015260208401516040840152806040850151166060840152506060830151611fdc60808401826001600160a01b03169052565b5060808301516001600160a01b03811660a08401525060a083015160c083015260c083015160e083015260e083015161010081818501528085015161012085015250509392505050565b82815260e081016119a26020830184611c2e565b6000821982111561204d5761204d612093565b500190565b600081600019048311821515161561206c5761206c612093565b500290565b60008261208e57634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220c5def73b04a0de29def9d0a9baca1c8133743753d1a52ff602d8132862412cab64736f6c63430008050033`,
  BytecodeLen: 8545,
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

