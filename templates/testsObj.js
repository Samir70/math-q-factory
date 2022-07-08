// change everything in CAPS
const TESTNAME = {
    name: "NAME_FOR_THIS_TEST",
    compareFunc: "PICK_FUNC_FROM_THOSE_LISTED_IN_TESTRUNNER",
    func: FUNC_BEING_TESTED,
    tests: [
      // DESCRIBE WHAT THE ARGS DO, SHOULD BE SIM TO FUNC_BEING_TESTED
      // each object below is a test
      { args: [], expect: [] },
      { args: [], expect: [] }
    ]
  }

// You only need one of these in every file, but you can have many of the above test objects in one file and export them all in one array
exports.NAME_FOR_GROUP_OF_TESTS = [TESTNAME]
