const oracledb = require('oracledb');
const config = require('./config');

(async () => {
    await oracledb.createPool(config.oracleDbConfig);
    const connOracle = await oracledb.getConnection();
    const sql = `SELECT numcad, nomfun, codcar, numloc FROM r034fun WHERE numcad = :numcad`;
    const seniorCourse = await connOracle.execute(sql, { numcad: '21219' }, { outFormat: oracledb.OBJECT });
    connOracle.close();
    if (seniorCourse.rows.length) {
        console.log(seniorCourse.rows.length);
    }
})();