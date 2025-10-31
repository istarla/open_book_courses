import type { Course } from "../index";

// ===== 01 - Introduction =====
import Introduction from "./lessons/01-introduction/01-01-Introduction.mdx";
import Setup from "./lessons/01-introduction/01-02-Setting_up_environment.mdx";
import FirstPythonProgram from "./lessons/01-introduction/01-03-first-python-program.mdx";
import Variable from "./lessons/01-introduction/01-04-Variables-and-comments.mdx";

// ===== 02 - Data Handling =====
import Datatypes from "./lessons/02-DataHandling/02-01-Data-Types.mdx";

// ===== 03 - Operators =====
import Operators from "./lessons/03-Operators/03-01-Arithmetic_Operators.mdx";
import ComparisonLogicalOperators from "./lessons/03-Operators/03-02-Comparison-Logical-Operators.mdx";
import AssignmentOperators from "./lessons/03-Operators/03-03-Assignment_Operators.mdx";
import BitwiseOperators from "./lessons/03-Operators/03-04-Bitwise_Operators.mdx";
import MembershipidentifyOperators from "./lessons/03-Operators/03-05-Membership_idetify_Operators.mdx";
import conditionalExpressions from "./lessons/03-Operators/03-06-Conditional_Expressions.mdx";

// ===== 04 - Strings =====
import IntroductionToStrings from "./lessons/04-Strings/04-01-Introduction_to_Strings.mdx";

// ===== 05 - Input & Output =====
import inputandoutput from "./lessons/05-Inputandoutput/05-01-Input_and_output.mdx";

// ===== 06 - Conditional Statements =====
import ifStatement from "./lessons/06-ConditionalStatements/06-01-if_Statement.mdx";
import ifelseStatement from "./lessons/06-ConditionalStatements/06-02-if_else_Statement.mdx";
import ifelefelseStatement from "./lessons/06-ConditionalStatements/06-03-if_elif_else_statement.mdx";
import nestedstatement from "./lessons/06-ConditionalStatements/06-04-Nested_Statement.mdx";
//============07-looping-and-iterations============================
import forloop from "./lessons/07-Loopinganditeration/07-01-for_loop.mdx";
import whileloop from "./lessons/07-Loopinganditeration/07-02-while_loop.mdx";
import loopcontrol from "./lessons/07-Loopinganditeration/07-03-loop_control_statements.mdx";
import nestedloop from "./lessons/07-Loopinganditeration/07-04-nested_loop.mdx";
//============08-lists============================
import list from "./lessons/08-lists/08-01-Introduction_to_lists.mdx";
import listmethods from "./lessons/08-lists/08-02-list_methods.mdx";
import listslicing from "./lessons/08-lists/08-03-list_slicing_and_indexing.mdx";
import listcomprehensions from "./lessons/08-lists/08-04-list_comprehensions.mdx";
//============09-tuples============================
import Tuples from "./lessons/09-Tuples/09-01-Introduction_to_tuples.mdx";
import workingwithtuples from "./lessons/09-Tuples/09-02-working_with_tuples.mdx";
//============10-dictionaries============================
import Introductiontodictionaries from "./lessons/10-dictionaries/10-01-introduction_to_dictionaries.mdx";
import workingwithdictionaries from "./lessons/10-dictionaries/10-02-working_with_dictionaries.mdx";
//============11-sets============================
import introductiontosets from "./lessons/11-sets/11-01-introduction_to_sets.mdx";
import operations from "./lessons/11-sets/11-02-set_operations.mdx";
//============12-functions==========================
import functions from "./lessons/12-functions/12-01-Defining_functions.mdx";
import functionarguments from "./lessons/12-functions/12-02-function_arguments.mdx";
import Defaultandkeyword from "./lessons/12-functions/12-03-Default_and_Keywords.mdx";
import arbitraryarguments from "./lessons/12-functions/12-04-arbitrary_arguments.mdx";
import returningvalues from "./lessons/12-functions/12-05-return_values_and_scope.mdx";
import lambdafunctions from "./lessons/12-functions/12-06-lambda_functions.mdx";
//=================13-odules_and_packages================================
import importingmodules from "./lessons/13-modules_and_packages/13-01-importing_modules.mdx";
import creatingmodules from "./lessons/13-modules_and_packages/13-02-creating_modules.mdx";
//=====================14-file_handling_and_exceptions======================
import filehandling from "./lessons/14-file-handling-and-exceptions/14-01-introduction_to_file.mdx";
import writingtofiles from "./lessons/14-file-handling-and-exceptions/14-02-writing_to_files.mdx";
import filemodesandwithstatements from "./lessons/14-file-handling-and-exceptions/14-03-file_modes_and_with_statement.mdx";
//============================15-exceptions==========================================
import introductionexceptions from "./lessons/15-exceptions/15-01-introduction_to_exceptions.mdx";
import handlingexceptions from "./lessons/15-exceptions/15-02-handling_exceptions_try_exception.mdx";
import  multipleexceptionblocksfinally from "./lessons/15-exceptions/15-03-multiple_exception_blocks_finally.mdx";
import  raisingexceptions from "./lessons/15-exceptions/15-04-raising_exceptions.mdx";
//===============================16-oops==================================================
import introductiontoops from "./lessons/16-oops/16-01-introduction_to_oop.mdx";
import classattributesandmethods from "./lessons/16-oops/16-02-class_attributes_and_methods.mdx";
import instanceattributesandmethods from "./lessons/16-oops/16-03-instance_attributes_init_method.mdx";
import inheritance from "./lessons/16-oops/16-04-inheritance.mdx";
import polymorphism from "./lessons/16-oops/16-05-polymorphism_and_encapsulation.mdx";
//========================AdvanceTopics================================
import iteratorsanditerables from "./lessons/17-AdvanceTopics/17-01-iterators_and_iterables.mdx";
import generators from "./lessons/17-AdvanceTopics/17-02-generators.mdx";
import decorators from "./lessons/17-AdvanceTopics/17-03-decorators.mdx";
import  context_managers from "./lessons/17-AdvanceTopics/17-04-context_managers_with.mdx";
import standardlibraryoverviewpt1 from "./lessons/17-AdvanceTopics/17-05-standard_library_overview_pt1.mdx";
import standardlibraryoverviewpt2 from "./lessons/17-AdvanceTopics/17-06-standard_library_overview_pt2.mdx";
import virtualenvironments from "./lessons/17-AdvanceTopics/17-07-virtual_environments.mdx";
import  introtorequestslibrary from "./lessons/17-AdvanceTopics/17-08-intro_to_requests_library.mdx";
import introtonumpyandpandas from "./lessons/17-AdvanceTopics/17-09-intro_to_numpy_pandas.mdx";
import introtoflaskdjango from "./lessons/17-AdvanceTopics/17-10-intro_to_flask_django.mdx";
import basictestingwithunittest from "./lessons/17-AdvanceTopics/17-11-basic_testing_with_unittest.mdx";
import pep8andcodestyle from "./lessons/17-AdvanceTopics/17-12-pep8_and_code_style.mdx";
import coursereviewandprojectideas from "./lessons/17-AdvanceTopics/17-13-course_review_and_project_ideas.mdx";
import furtherlearningresources from "./lessons/17-AdvanceTopics/17-14-further_learning_resources.mdx";
import furtherlearning from "./lessons/17-AdvanceTopics/17-15-further_learning_resources.mdx"






















const pythonCourse: Course = {
  code: "C003",
  id: "python",
  title: "Python Basics",
  folderName: "python",
  folderPath: "/src/courses/python",
  noOfLessons: 12,
  imageURL: "/src/courses/assets/src/courses/python/images/python.png",
  description: "Learn Python step by step from introduction to advanced features. Covers variables, data types, control flow, functions, modules, and object-oriented programming.",

  lessons: [
    // 🟦 Introduction Folder
    {
      type: "folder",
      id: "01-introduction",
      title: "Introduction to Python",
      children: [
        {
          type: "file",
          id: "01-introduction",
          title: "Introduction",
          component: Introduction,
          sections: [
            { id: "what-is-python", title: "what-is-python" },
            { id: "Brief-history-of-python", title: "Brief-history-of-python" },
            { id: "Common-Uses-of-Python", title: "Common Uses of Python" },
            { id: "Why-learn-python", title: "Why Learn Python?" },
            { id: "Quiz-time", title: "Quiz Time!" },
          ],
        },
        {
          type: "file",
          id: "02-setup",
          title: "Setting Up Python",
          component: Setup,
          sections: [
            { id: "why-set-up-environment", title: "Why Set Up Environment" },
            { id: "Installation", title: "Installation" },
            { id: "Installation-Steps", title: "Installation Steps" },
            { id: "TestEditor", title: "Test Editor" },
            { id: "Running-Python-Code", title: "Running Python Code" },
            { id: "Quiz", title: "Quiz!" },
          ],
        },
        {
          type: "file",
          id: "03-first-python-program",
          title: "Your First Python Program & Basic Syntax",
          component: FirstPythonProgram,
          sections: [
            { id: "hello-world", title: "Hello World" },
            { id: "key-syntax-concepts", title: "Key Python Syntax Concepts" },
            { id: "Comments", title: "Comments" },
            { id: "Case-Sensitivity", title: "Case Sensitivity" },
            { id: "Quiz", title: "Quiz!" },
          ],
        },
        {
          type: "file",
          id: "04-variable",
          title: "Variables & Comments",
          component: Variable,
          sections: [
            { id: "What-are-variables?", title: "What are Variables?" },
            { id: "Dynamic-Typing", title: "Dynamic Typing" },
            {
              id: "variable-naming-rules-and-conventions",
              title: "Variable Naming Rules and Conventions",
            },
            { id: "identifiers", title: "Identifiers" },
            { id: "Revisiting Comments", title: "Revisiting Comments" },
            { id: "Quiz", title: "Quiz!" },
          ],
        },
      ],
    },

    // 🟩 Data Handling Folder
    {
      type: "folder",
      id: "02-datahandling",
      title: "Data Handling",
      children: [
        {
          type: "file",
          id: "02-data-types",
          title: "Data Types",
          component: Datatypes,
          sections: [
            { id: "What-is-data?", title: "What is Data?" },
            { id: "Introduction-to-data-types", title: "Introduction to Data Types" },
            { id: "Integers", title: "Integers" },
            { id: "Floating-Point-Numbers", title: "Floating-Point Numbers" },
            { id: "Booleans", title: "Booleans" },
            { id: "Complex-Numbers", title: "Complex Numbers" },
            { id: "Strings", title: "Strings" },
            { id: "Type-Conversion", title: "Type Conversion" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
      ],
    },

    // 🟨 Operators Folder
    {
      type: "folder",
      id: "03-operators",
      title: "Operators",
      children: [
        {
          type: "file",
          id: "03-01-arithmetic-operators",
          title: "Arithmetic Operators",
          component: Operators,
          sections: [
            { id: "What-are-operators?", title: "What are Operators?" },
            { id: "Common-arithmetic-operators", title: "Common Arithmetic Operators" },
            { id: "Detailed-explanations", title: "Detailed Explanations" },
            { id: "Operator-Precedence", title: "Operator Precedence" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "03-02-comparison-logical-operators",
          title: "Comparison & Logical Operators",
          component: ComparisonLogicalOperators,
          sections: [
            { id: "Introduction", title: "Introduction" },
            { id: "Comparison-Operators", title: "Comparison Operators" },
            { id: "Logical-Operators", title: "Logical Operators" },
            { id: "Truth-Tables", title: "Truth Tables" },
            { id: "Short-Circuit-Evaluation", title: "Short-Circuit Evaluation" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "03-03-assignment-operators",
          title: "Assignment Operators",
          component: AssignmentOperators,
          sections: [
            { id: "What-are-assignment-operators?", title: "What are Assignment Operators?" },
            { id: "Compound-assignment-operators", title: "Compound Assignment Operators" },
            { id: "Why-use-compound-operators?", title: "Why Use Compound Operators?" },
            { id: "Examples", title: "Examples" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "03-04-bitwise_operators",
          title: "Bitwise Operators",
          component: BitwiseOperators,
          sections: [
            { id: "What-are-bitwise-operators?", title: "What are Bitwise Operators?" },
            { id: "Types-of-bitwise-operators", title: "Types of Bitwise Operators" },
            { id: "Examples", title: "Examples" },
            {
              id: "Combined-with-assignment-operators",
              title: "Combined with Assignment Operators",
            },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "03-05-membership_idetify_operators",
          title: "Membership & Identity Operators",
          component: MembershipidentifyOperators,
          sections: [
            { id: "What-are-membership-operators?", title: "What-are-membership-operators?" },
            { id: "Examples-of-membership-operators", title: "Examples-of-membership-operators" },
            { id: "What-are-identity-operators?", title: "What-are-identity-operators?" },
            { id: "Examples-of-identity-operators", title: "Examples-of-identity-operators" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "03-06-conditional_Expressions",
          title: "ConditionalExpressions",
          component: conditionalExpressions,
          sections: [
            { id: "What-are-conditionals?", title: "What-are-conditionals?" },
            { id: "if-statement", title: "if-statement" }
          ],
        },
      ],
    },


    // 🟦 Strings Folder
    {
      type: "folder",
      id: "04-strings",
      title: "Strings",
      children: [
        {
          type: "file",
          id: "04-01-introduction-to-strings",
          title: "Introduction to Strings",
          component: IntroductionToStrings,
          sections: [
            { id: "Revisiting-strings", title: "Revisiting Strings" },
            { id: "Common-string-operations", title: "Common String Operations" },
            { id: "More-on-indexing-slicing", title: "More on Indexing & Slicing" },
            { id: "Introduction-to-string-methods", title: "Introduction to String Methods" },
            { id: "Common-formatting-methods", title: "Common Formatting Methods" },
            { id: "Common-searching-checking-methods", title: "Common Searching/Checking Methods" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
      ],
    },

    // 🟧 Input and Output Folder
    {
      type: "folder",
      id: "05-input-and-output",
      title: "Input and Output",
      children: [
        {
          type: "file",
          id: "05-01-input-and-output",
          title: "Input and Output",
          component: inputandoutput,
          sections: [
            { id: "interactive-programs", title: "interactive-programs" },
            { id: "f-strings", title: "f-strings" },
            { id: "f-string-formatting", title: "f-string-formatting" },
            { id: "simple-calculator", title: "simple-calculator" },
            { id: "greeting-generator", title: "greeting-generator" },
            { id: "receipt-formatter", title: "receipt-formatter" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
      ],
    },
    {
      type: "folder",
      id: "06-conditionalstatements",
      title: "Conditional Statements",
      children: [
        {
          type: "file",
          id: "06-01-if-statement",
          title: "if Statement",
          component: ifStatement,
          sections: [
            { id: "control-flow", title: "control-flow" },
            { id: "if-statement", title: "if-statement" },
            { id: "how-it-works", title: "how-it-works" },
            { id: "truthy-falsy", title: "truthy-falsy" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "06-02-if-else-statement",
          title: "if-else Statement",
          component: ifelseStatement,
          sections: [
            { id: "Introduction-to-if-else-Statements", title: "Introduction-to-if-else-Statements" },
            { id: "if-else-statement-syntax", title: "if-else-statement-syntax" },
            { id: "how-it-works", title: "how-it-works" },
            { id: "example-1-checking-even-or-odd-numbers", title: "example-1-checking-even-or-odd-numbers" },
            { id: "example-2-granting-access-based-on-age", title: "example-2-granting-access-based-on-age" },
            { id: "example-3-simple-login-result", title: "example-3-simple-login-result" },
            { id: "combining-with-truthy-falsy", title: "combining-with-truthy-falsy" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "06-03-if-elif-else-statement",
          title: "if-elif-else Statement",
          component: ifelefelseStatement,
          sections: [
            { id: "Introduction-to-if-elif-else-Statements", title: "Introduction-to-if-elif-else-Statements" },
            { id: "if-elif-else-statement-syntax", title: "if-elif-else-statement-syntax" },
            { id: "how-it-works", title: "how-it-works" },
            { id: "example-1-grading-system", title: "example-1-grading-system" },
            { id: "example-2-number-comparison", title: "example-2-number-comparison" },
            { id: "example-3-simple-menu-choice", title: "example-3-simple-menu-choice" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "06-04-nested-if-statements",
          title: "Nested if Statements",
          component: nestedstatement,
          sections: [
            { id: "Introduction-to-Nested-Conditionals", title: "Introduction-to-Nested-Conditionals" },
            { id: "syntax-and-structure", title: "syntax-and-structure" },
            { id: "when-to-use-nested-conditionals", title: "when-to-use-nested-conditionals" },
            { id: "example-1-login-and-role-check", title: "example-1-login-and-role-check" },
            { id: "example-2-number-range-classification", title: "example-2-number-range-classification" },
            { id: "example-3-ticket-pricing-based-on-age-and-day", title: "example-3-ticket-pricing-based-on-age-and-day" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
      ],
    },

    {
      type: "folder",
      id: "07-looping-and-iterations",
      title: "Looping and Iterations",
      children: [
        {
          type: "file",
          id: "07-01-for_loop",
          title: "for loop",
          component: forloop,
          sections: [
            { id: "Introduction-to-for-loop", title: "Introduction-to-for-loop" },
            { id: "for-loop-syntax", title: "for-loop-syntax" },
            { id: "simple-counting-loop", title: "simple-counting-loop" },
            { id: "iterating-over-a-string", title: "iterating-over-a-string" },
            { id: "calculating-a-sum", title: "calculating-a-sum" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "07-02-while_loop",
          title: "while loop",
          component: whileloop,
          sections: [
            { id: "introduction-to-while-loop", title: "introduction-to-while-loop" },
            { id: "while-loop-syntax", title: "while-loop-syntax" },
            { id: "how-it-works", title: "how-it-works" },
            { id: "simple-counter-with-while", title: "simple-counter-with-while" },
            { id: "waiting-for-specific-user-input", title: "waiting-for-specific-user-input" },
            { id: "simple-guessing-game-conceptual", title: "simple-guessing-game-conceptual" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "07-03-loop_control_statements",
          title: "loopcontrol",
          component: loopcontrol,
          sections: [
            { id: "break-statement", title: "break-statement" },
            { id: "continue-statement", title: "continue-statement" },
            { id: "finding-the-first-vowel", title: "finding-the-first-vowel" },
            { id: "summing-only-positive-numbers", title: "summing-only-positive-numbers" },
            { id: "input-loop-with-validation-and-exit", title: "input-loop-with-validation-and-exit" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "07-04-nested_loop",
          title: "nestedloop",
          component: nestedloop,
          sections: [
            { id: "nested-loops", title: "nested-loops" },
            { id: "nested-loop-syntax", title: "nested-loop-syntax" },
            { id: "printing-coordinates-grid", title: "printing-coordinates-grid" },
            { id: "multiplication-table", title: "multiplication-table" },
            { id: "finding-pairs-in-a-list", title: "finding-pairs-in-a-list" },
            { id: "break-and-continue-in-nested-loops", title: "break-and-continue-in-nested-loops" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
      ],
    },
    {
      type: "folder",
      id: "08-lists",
      title: "lists",
      children: [
        {
          type: "file",
          id: "08-01-Introduction_to_lists",
          title: "lists",
          component: list,
          sections: [
            { id: "storing-collections-of-data", title: "storing-collections-of-data" },
            { id: "creating-lists", title: "creating-lists" },
            { id: "accessing-list-items-indexing", title: "accessing-list-items-indexing" },
            { id: "modifying-list-items", title: "modifying-list-items" },
            { id: "finding-the-length-of-a-list", title: "finding-the-length-of-a-list" },
            { id: "iterating-over-lists-with-for-loops", title: "iterating-over-lists-with-for-loops" },
            { id: "storing-and-accessing-usernames", title: "storing-and-accessing-usernames" },
            { id: "creating-a-list-with-range", title: "creating-a-list-with-range" },
            { id: "basic-inventory-check", title: "basic-inventory-check" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "08-02-list-methods",
          title: "list-methods",
          component: listmethods,
          sections: [
            { id: "listmethods", title: "listmethods" },
            { id: "manipulating-lists-beyond-indexing", title: "manipulating-lists-beyond-indexing" },
            { id: "common-list-methods", title: "common-list-methods" },
            { id: "adding-items", title: "adding-items" },
            { id: "removing-items", title: "removing-items" },
            { id: "searching-and-counting", title: "searching-and-counting" },
            { id: "sorting-and-reversing", title: "sorting-and-reversing" },
            { id: "copying-lists", title: "copying-lists" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "08-03-list_slicing_and_indexing",
          title: "list_slicing_and_indexing",
          component: listslicing,
          sections: [
            { id: "recap-basic-indexing", title: "recap-basic-indexing" },
            { id: "extracting-sub-lists-slicing", title: "extracting-sub-lists-slicing" },
            { id: "modifying-lists-with-slicing", title: "modifying-lists-with-slicing" },
            { id: "deleting-elements-with-del", title: "deleting-elements-with-del" },
            { id: "example-1-extracting-middle-elements", title: "example-1-extracting-middle-elements" },
            { id: "example-2-replacing-a-segment-of-a-list", title: "example-2-replacing-a-segment-of-a-list" },
            { id: "example-3-using-step-in-slicing", title: "example-3-using-step-in-slicing" },
            { id: "Quiz-time", title: "Quiz Time" }
          ],
        },
        {
          type: "file",
          id: "08-04-list_comprehensions",
          title: "list_comprehensions",
          component: listcomprehensions,
          sections: [
            { id: "a-concise-way-to-create-lists", title: "a-concise-way-to-create-lists" },
            { id: "basic-list-comprehension-syntax", title: "basic-list-comprehension-syntax" },
            { id: "adding-a-conditional-filter", title: "adding-a-conditional-filter" },
            { id: "conditional-expression-within-comprehension", title: "conditional-expression-within-comprehension" },
            { id: "example-1-uppercasing-names", title: "example-1-uppercasing-names" },
            { id: "example-2-filtering-short-words", title: "example-2-filtering-short-words" },
            { id: "example-3-extracting-digits-from-a-string", title: "example-3-extracting-digits-from-a-string" },
            { id: "Quiz-time", title: "Quiz Time" }
          ],
        }
      ],
    },
    {
      type: "folder",
      id: "09-Tuples",
      title: "Tuples",
      children: [
        {
          type: "file",
          id: "09-01-Introduction_to_tuples",
          title: "Introduction_to_tuples",
          component: Tuples,
          sections: [
            { id: "tuples", title: "tuples" },
            { id: "creating-tuples", title: "creating-tuples" },
            { id: "accessing-tuple-items", title: "accessing-tuple-items" },
            { id: "immutability-in-action", title: "immutability-in-action" },
            { id: "why-use-tuples", title: "why-use-tuples" },
            { id: "example-1-representing-fixed-data-rgb-color", title: "example-1-representing-fixed-data-rgb-color" },
            { id: "example-2-iterating-through-a-tuple", title: "example-2-iterating-through-a-tuple" },
            { id: "example-3-tuple-methods-count-and-index", title: "example-3-tuple-methods-count-and-index" },
            { id: "quiz-time", title: "quiz-time" },
          ],
        },
        {
          type: "file",
          id: "09-02-working_with_tuples",
          title: "working_with_tuples",
          component: workingwithtuples,
          sections: [
            { id: "tuple-basics", title: "tuple-basics" },
            { id: "tuple-packing", title: "tuple-packing" },
            { id: "tuple-unpacking", title: "tuple-unpacking" },
            { id: "using-unpacking-in-for-loops", title: "using-unpacking-in-for-loops" },
            { id: "swapping-variables-using-packing-unpacking", title: "swapping-variables-using-packing-unpacking" },
            { id: "example-1-processing-point-data", title: "example-1-processing-point-data" },
            { id: "example-2-returning-multiple-results-from-a-calculation", title: "example-2-returning-multiple-results-from-a-calculation" },
            { id: "example-3-basic-record-handling", title: "example-3-basic-record-handling" },
            { id: "quiz-time", title: "quiz-time" },
          ],
        },
      ],
    },
    {
      type: "folder",
      id: "10-dictionaries",
      title: "dictionaries",
      children: [
        {
          type: "file",
          id: "10-01-introduction_to_dictionaries",
          title: "introduction_to_dictionaries",
          component: Introductiontodictionaries,
          sections: [
            { id: "key-value-pair-collections", title: "key-value-pair-collections" },
            { id: "creating-dictionaries", title: "creating-dictionaries" },
            { id: "accessing-dictionary-values", title: "accessing-dictionary-values" },
            { id: "modifying-and-adding-items", title: "modifying-and-adding-items" },
            { id: "removing-items", title: "removing-items" },
            { id: "example-1-simple-contact-list", title: "example-1-simple-contact-list" },
            { id: "example-2-word-frequency-counter-basic", title: "example-2-word-frequency-counter-basic" },
            { id: "example-3-representing-game-character-stats", title: "example-3-representing-game-character-stats" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "10-02-working_with_dictionaries",
          title: "working_with_dictionaries",
          component: workingwithdictionaries,
          sections: [
            { id: "recap-dictionary-methods", title: "recap-dictionary-methods" },
            { id: "iterating-through-dictionaries", title: "iterating-through-dictionaries" },
            { id: "nested-dictionaries", title: "nested-dictionaries" },
            { id: "iterating-through-nested-dictionaries", title: "iterating-through-nested-dictionaries" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        }
      ],
    },
    {
      type: "folder",
      id: "11-sets",
      title: "sets",
      children: [
        {
          type: "file",
          id: "11-01-introduction_to_sets",
          title: "introduction_to_sets",
          component: introductiontosets,
          sections: [
            { id: "collections-of-unique-items", title: "collections-of-unique-items" },
            { id: "creating-sets", title: "creating-sets" },
            { id: "basic-set-operations", title: "basic-set-operations" },
            { id: "example-1-finding-unique-characters", title: "example-1-finding-unique-characters" },
            { id: "example-2-tracking-attended-workshops", title: "example-2-tracking-attended-workshops" },
            { id: "example-3-removing-duplicates-from-a-list", title: "example-3-removing-duplicates-from-a-list" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "11-02-set_operations",
          title: "set_operations",
          component: operations,
          sections: [
            { id: "recap-sets-for-uniqueness", title: "recap-sets-for-uniqueness" },
            { id: "core-set-operations", title: "core-set-operations" },
            { id: "subset-and-superset-checks", title: "subset-and-superset-checks" },
            { id: "Quiz-time", title: "Quiz-time" },
          ],
        },
      ],
    },
    {
      type: "folder",
      id: "12-functions",
      title: "functions",
      children: [
        {
          type: "file",
          id: "12-01-Defining_functions",
          title: "Defining_functions",
          component: functions,
          sections: [
            { id: "the-need-for-functions", title: "the-need-for-functions" },
            { id: "defining-a-function-the-def-statement", title: "defining-a-function-the-def-statement" },
            { id: "calling-a-function", title: "calling-a-function" },
            { id: "functions-with-parameters", title: "functions-with-parameters" },
            { id: "example-1-function-to-print-a-separator-line", title: "example-1-function-to-print-a-separator-line" },
            { id: "example-2-function-to-calculate-area-of-a-rectangle", title: "example-2-function-to-calculate-area-of-a-rectangle" },
            { id: "example-3-function-to-display-list-items", title: "example-3-function-to-display-list-items" },
            { id: "Quiz-time", title: "Quiz Time" }
          ],
        },

        {
          type: "file",
          id: "12-02-function_arguments",
          title: "function_arguments",
          component: functionarguments,
          sections: [
            { id: "recap-defining-and-calling", title: "recap-defining-and-calling" },
            { id: "positional-arguments", title: "positional-arguments" },
            { id: "keyword-arguments", title: "keyword-arguments" },
            { id: "parameters-vs-arguments-clarification", title: "parameters-vs-arguments-clarification" },
            { id: "example-1-function-with-positional-arguments", title: "example-1-function-with-positional-arguments" },
            { id: "example-2-function-with-keyword-arguments", title: "example-2-function-with-keyword-arguments" },
            { id: "example-3-avoiding-ambiguity", title: "example-3-avoiding-ambiguity" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "12-03-Default_and_Keyword",
          title: "Defalut_and_Keyword",
          component: Defaultandkeyword,
          sections: [
            { id: "recap-positional-and-keyword-arguments", title: "recap-positional-and-keyword-arguments" },
            { id: "default-argument-values", title: "default-argument-values" },
            { id: "combining-positional-keyword-and-default-arguments", title: "combining-positional-keyword-and-default-arguments" },
            { id: "common-use-cases-for-default-arguments", title: "common-use-cases-for-default-arguments" },
            { id: "example-1-sending-a-message-with-optional-priority", title: "example-1-sending-a-message-with-optional-priority" },
            { id: "example-2-formatting-text-with-optional-width", title: "example-2-formatting-text-with-optional-width" },
            { id: "example-3-database-connection-conceptual", title: "example-3-database-connection-conceptual" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "12-04-arbitrary_arguments",
          title: "arbitrary_arguments",
          component: arbitraryarguments,
          sections: [
            { id: "handling-an-unknown-number-of-arguments", title: "handling-an-unknown-number-of-arguments" },
            { id: "arbitrary-positional-arguments-args", title: "arbitrary-positional-arguments-args" },
            { id: "arbitrary-keyword-arguments-kwargs", title: "arbitrary-keyword-arguments-kwargs" },
            { id: "order-of-parameters-in-definition", title: "order-of-parameters-in-definition" },
            { id: "example-1-concatenating-strings", title: "example-1-concatenating-strings" },
            { id: "example-2-building-html-tags-simplified", title: "example-2-building-html-tags-simplified" },
            { id: "example-3-processing-report-data", title: "example-3-processing-report-data" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "12-05-return_values_and_scope",
          title: "returning_values",
          component: returningvalues,
          sections: [
            { id: "getting-output-from-functions-the-return-statement", title: "getting-output-from-functions-the-return-statement" },
            { id: "returning-multiple-values", title: "returning-multiple-values" },
            { id: "variable-scope-local-vs-global", title: "variable-scope-local-vs-global" },
            { id: "modifying-global-variables-the-global-keyword", title: "modifying-global-variables-the-global-keyword" },
            { id: "example-1-function-returning-calculation-result", title: "example-1-function-returning-calculation-result" },
            { id: "example-2-scope-demonstration", title: "example-2-scope-demonstration" },
            { id: "example-3-function-simulating-dice-rolls", title: "example-3-function-simulating-dice-rolls" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "12-06-lambda_functions",
          title: "lambda_functions",
          component: lambdafunctions,
          sections: [
            { id: "small-anonymous-functions", title: "small-anonymous-functions" },
            { id: "syntax-of-lambda-functions", title: "syntax-of-lambda-functions" },
            { id: "comparing-lambda-with-def", title: "comparing-lambda-with-def" },
            { id: "when-to-use-lambda-functions", title: "when-to-use-lambda-functions" },
            { id: "example-1-simple-arithmetic-lambda", title: "example-1-simple-arithmetic-lambda" },
            { id: "example-2-using-sorted", title: "example-2-using-sorted" },
            { id: "example-3-using-filter", title: "example-3-using-filter" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
      ],
    },
    {
      type: "folder",
      id: "13-modules_and_packages",
      title: "modules",
      children: [
        {
          type: "file",
          id: "13-01-importing_modules",
          title: "importing_modules",
          component: importingmodules,
          sections: [
            { id: "extending-pythons-capabilities", title: "extending-pythons-capabilities" },
            { id: "importing-entire-modules-the-import-statement", title: "importing-entire-modules-the-import-statement" },
            { id: "importing-specific-names-the-from-import-statement", title: "importing-specific-names-the-from-import-statement" },
            { id: "importing-with-an-alias-the-as-keyword", title: "importing-with-an-alias-the-as-keyword" },
            { id: "importing-everything-generally-discouraged", title: "importing-everything-generally-discouraged" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "13-02-creating_modules",
          title: "creating_modules",
          component: creatingmodules,
          sections: [
            { id: "organizing-your-code-into-reusable-files", title: "organizing-your-code-into-reusable-files" },
            { id: "step-by-step-creating-and-using-a-module", title: "step-by-step-creating-and-using-a-module" },
            { id: "example-1-simple-calculator-module", title: "example-1-simple-calculator-module" },
            { id: "example-2-module-with-constants", title: "example-2-module-with-constants" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
      ],
    },
    {
      type: "folder",
      id: "14-file-handling-and-exceptions",
      title: "file-handling-and-exceptions",
      children: [
        {
          type: "file",
          id: "14-01-introduction_to_files",
          title: "introduction_to_files",
          component: filehandling,
          sections: [
            { id: "interacting-with-files", title: "interacting-with-files" },
            { id: "reading-file-content", title: "reading-file-content" },
            { id: "example-1-reading-the-entire-file-read", title: "example-1-reading-the-entire-file-read" },
            { id: "example-2-reading-line-by-line-readline-or-loop", title: "example-2-reading-line-by-line-readline-or-loop" },
            { id: "example-3-reading-all-lines-into-a-list-readlines", title: "example-3-reading-all-lines-into-a-list-readlines" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "14-02-writing_to_files",
          title: "writing_to_files",
          component: writingtofiles,
          sections: [
            { id: "saving-data-to-files", title: "saving-data-to-files" },
            { id: "writing-content-write-and-writelines", title: "writing-content-write-and-writelines" },
            { id: "example-1-writing-to-a-new-file-w-mode", title: "example-1-writing-to-a-new-file-w-mode" },
            { id: "example-2-appending-to-an-existing-file-a-mode", title: "example-2-appending-to-an-existing-file-a-mode" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "14-03-file_modes_and_with_statements",
          title: "file_modes_and_with_statements",
          component: filemodesandwithstatements,
          sections: [
            { id: "recap-opening-files-and-modes", title: "recap-opening-files-and-modes" },
            { id: "more-file-modes-binary-and-update", title: "more-file-modes-binary-and-update" },
            { id: "the-problem-with-forgetting-close", title: "the-problem-with-forgetting-close" },
            { id: "context-managers-the-with-statement", title: "context-managers-the-with-statement" },
          ],
        },
      ],
    },
    {
      type: "folder",
      id: "15-exceptions",
      title: "exceptions",
      children: [
        {
          type: "file",
          id: "15-01-introduction_to_exceptions",
          title: "exceptions",
          component: introductionexceptions,
          sections: [
            { id: "when-programs-go-wrong", title: "when-programs-go-wrong" },
            { id: "what-is-an-exception", title: "what-is-an-exception" },
            { id: "common-built-in-exception-types", title: "common-built-in-exception-types" },
            { id: "understanding-tracebacks", title: "understanding-tracebacks" },
            { id: "example-1-triggering-a-zerodivisionerror", title: "example-1-triggering-a-zerodivisionerror" },
            { id: "example-2-triggering-a-typeerror", title: "example-2-triggering-a-typeerror" },
            { id: "example-3-triggering-an-indexerror", title: "example-3-triggering-an-indexerror" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
        {
          type: "file",
          id: "15-02-handling_exceptions_try_exceptions",
          title: "handling_exceptions",
          component: handlingexceptions,
          sections: [
            { id: "preventing-program-crashes", title: "preventing-program-crashes" },
            { id: "the-try-except-block-syntax", title: "the-try-except-block-syntax" },
            { id: "handling-specific-exceptions", title: "handling-specific-exceptions" },
            { id: "Quiz-Time", title: "Quiz-Time" },
          ],
        },
        {
          type: "file",
          id: "15-03-multiple_exception_blocks_finally",
          title: "multiple_exception_blocks_finally",
          component: multipleexceptionblocksfinally,
          sections: [
            { id: "recap-basic-exception-handling", title: "recap-basic-exception-handling" },
            { id: "handling-multiple-exception-types", title: "handling-multiple-exception-types" },
            { id: "grouping-exceptions", title: "grouping-exceptions" },
            { id: "the-finally-clause-guaranteed-execution", title: "the-finally-clause-guaranteed-execution" },
            { id: "example-1-robust-division-calculator", title: "example-1-robust-division-calculator" },
            { id: "example-2-handling-different-dictionary-list-errors", title: "example-2-handling-different-dictionary-list-errors" },
            { id: "example-3-resource-cleanup-simulation", title: "example-3-resource-cleanup-simulation" },
          ]
        },
        {
          type: "file",
          id: "15-04-raising_exceptions",
          title: "raising_exceptions",
          component: raisingexceptions,
          sections: [
            { id: "signaling-errors-explicitly", title: "signaling-errors-explicitly" },
            { id: "the-raise-statement-syntax", title: "the-raise-statement-syntax" },
            { id: "why-raise-exceptions", title: "why-raise-exceptions" },
            { id: "example-1-validating-function-input", title: "example-1-validating-function-input" },
            { id: "example-2-raising-error-for-unimplemented-feature", title: "example-2-raising-error-for-unimplemented-feature" },
            { id: "example-3-re-raising-exceptions", title: "example-3-re-raising-exceptions" },
            { id: "Quiz-time", title: "Quiz Time" },
          ],
        },
      ],
    },
    {
      type: "folder",
      id: "16-oops",
      title: "oops",
      children: [
        {
          type: "file",
          id: "16-01-introduction_to_oop",
          title: "introduction_to_oop",
          component: introductiontoops,
          sections: [
            { id: "a-new-way-of-thinking-objects", title: "a-new-way-of-thinking-objects" },
            { id: "classes-blueprints-for-objects", title: "classes-blueprints-for-objects" },
            { id: "creating-instances-objects", title: "creating-instances-objects" },
            { id: "adding-attributes-data", title: "adding-attributes-data" },
            { id: "adding-methods-behavior", title: "adding-methods-behavior" },
            { id: "example-1-simple-point-class", title: "example-1-simple-point-class" },
            { id: "example-2-simple-book-class", title: "example-2-simple-book-class" },
            { id: "example-3-basic-lamp-class", title: "example-3-basic-lamp-class" },
            { id: "Quiz-Time", title: "Quiz-Time" },
          ],
        },
        {
          type: "file",
          id: "16-02-class_attributes_and_methods",
          title: "class_attributes_and_methods",
          component: classattributesandmethods,
          sections: [
            { id: "recap-classes-and-instances", title: "recap-classes-and-instances" },
            { id: "instance-attributes-vs-class-attributes", title: "instance-attributes-vs-class-attributes" },
            { id: "instance-methods-vs-class-methods-vs-static-methods", title: "instance-methods-vs-class-methods-vs-static-methods" },
            { id: "example-1-tracking-number-of-instances", title: "example-1-tracking-number-of-instances" },
            { id: "example-2-class-with-constants-and-utility-methods", title: "example-2-class-with-constants-and-utility-methods" },
            { id: "example-3-car-class-with-shared-property", title: "example-3-car-class-with-shared-property" },
            { id: "Quiz-Time", title: "Quiz-Time" }
          ],
        },
        {
          type: "file",
          id: "16-03-instance_attributes_and_method",
          title: "instance_attributes_and_method",
          component: instanceattributesandmethods,
          sections: [
            { id: "initializing-object-state", title: "initializing-object-state" },
            { id: "the-init-method-constructor", title: "the-init-method-constructor" },
            { id: "syntax-and-usage", title: "syntax-and-usage" },
            { id: "quiz-time", title: "quiz-time" },
          ],
        },
        {
          type: "file",
          id: "16-04-inheritance",
          title: "inheritance",
          component: inheritance,
          sections: [
            { id: "building-on-existing-classes-is-a-relationship", title: "building-on-existing-classes-is-a-relationship" },
            { id: "syntax-for-inheritance", title: "syntax-for-inheritance" },
            { id: "example-1-basic-animal-hierarchy", title: "example-1-basic-animal-hierarchy" },
            { id: "method-resolution-order-mro", title: "method-resolution-order-mro" },
            { id: "example-2-vehicle-hierarchy", title: "example-2-vehicle-hierarchy" },
            { id: "quiz-time", title: "quiz-time" },
          ],
        },
        {
          type: "file",
          id: "16-05-polymorphism",
          title: "polymorphism",
          component: polymorphism,
          sections: [
            { id: "recap-classes-and-inheritance", title: "recap-classes-and-inheritance" },
            { id: "polymorphism-many-forms", title: "polymorphism-many-forms" },
            { id: "polymorphism-example-different-speakers", title: "polymorphism-example-different-speakers" },
            { id: "encapsulation-protecting-data", title: "encapsulation-protecting-data" },
            { id: "access-modifiers-in-python-by-convention", title: "access-modifiers-in-python-by-convention" },
            { id: "quiz-time", title: "quiz-time" },
          ],
        },
      ],
    },
    {
      type: "folder",
      id: "17-AdvanceTopics",
      title: "AdvanceTopics",
      children: [
        {
          type: "file",
          id: "17-01-iterators_and_iterables",
          title: "iterators_and_iterables",
          component: iteratorsanditerables,
          sections: [
            { id: "understanding-how-for-loops-work", title: "understanding-how-for-loops-work" },
            { id: "iterables-objects-you-can-loop-over", title: "iterables-objects-you-can-loop-over" },
            { id: "iterators-objects-that-track-state", title: "iterators-objects-that-track-state" },
            { id: "the-iteration-protocol-how-for-uses-iter-and-next", title: "the-iteration-protocol-how-for-uses-iter-and-next" },
            { id: "example-1-manual-iteration-using-iter-and-next", title: "example-1-manual-iteration-using-iter-and-next" },
            { id: "example-2-iterating-over-dictionary-views", title: "example-2-iterating-over-dictionary-views" },
            { id: "example-3-range-object-is-iterable", title: "example-3-range-object-is-iterable" },
            { id: "Quiz-time", title: "Quiz-time" },
          ],
        },
        {
          type: "file",
          id: "17-02-generators",
          title: "generators",
          component: generators,
          sections: [
            { id: "what-are-generators", title: "what-are-generators" },
            { id: "syntax-using-yield", title: "syntax-using-yield" },
            { id: "generator-expressions", title: "generator-expressions" },
            { id: "example-1-generating-fibonacci-numbers", title: "example-1-generating-fibonacci-numbers" },
            { id: "example-2-reading-large-files-lazily", title: "example-2-reading-large-files-lazily" },
            { id: "example-3-using-generator-expression-for-summation", title: "example-3-using-generator-expression-for-summation" },
            { id: "Quiz-time", title: "Quiz-time" }
          ],
        },
        {
          type: "file",
          id: "17-03-decorators",
          title: "decorators",
          component: decorators,
          sections: [
            { id: "decorators", title: "decorators" },
            { id: "modifying-functions-and-methods", title: "modifying-functions-and-methods" },
            { id: "the-basic-idea-wrapping-functions", title: "the-basic-idea-wrapping-functions" },
            { id: "creating-a-simple-decorator", title: "creating-a-simple-decorator" },
            { id: "decorators-with-arguments", title: "decorators-with-arguments" },
            { id: "common-use-cases", title: "common-use-cases" },
            { id: "Quiz-time", title: "Quiz-time" }
          ],
        },
        {
          type: "file",
          id: "17-04-context-managers",
          title: "context_managers",
          component: context_managers,
          sections: [
            { id: "managing-resources-reliably-the-with-statement", title: "Managing Resources Reliably: The with Statement" },
            { id: "the-context-management-protocol", title: "The Context Management Protocol" },
            { id: "creating-custom-context-managers", title: "Creating Custom Context Managers" },
            { id: "using-contextlib-contextmanager-decorator", title: "Using contextlib.contextmanager Decorator" },
            { id: "example-1-database-connection", title: "Example 1: Database Connection (Conceptual)" },
            { id: "example-2-temporarily-changing-directory", title: "Example 2: Temporarily Changing Directory (Conceptual)" },
            { id: "example-3-simple-lock-acquisition", title: "Example 3: Simple Lock Acquisition (Conceptual)" },
            { id: "Quiz-time", title: "Quiz Time" }
          ],
        },
        {
          type: "file",
          id: "17-05-standard_library_overview_pt1",
          title: "standard_library_overview_pt1",
          component: standardlibraryoverviewpt1,
          sections: [
            { id: "python-batteries-included-philosophy", title: "python-batteries-included-philosophy" },
            { id: "the-os-module-operating-system-interface", title: "the-os-module-operating-system-interface" },
            { id: "the-sys-module-system-specific-parameters-and-functions", title: "the-sys-module-system-specific-parameters-and-functions" },
            { id: "the-math-module-revisited", title: "the-math-module-revisited" },
            { id: "quiz-time", title: "quiz-time" },
          ],
        },
        {
          type: "file",
          id: "17-06-standard_library_overview_pt2",
          title: "standard_library_overview_pt2",
          component: standardlibraryoverviewpt2,
          sections: [
            { id: "continuing-our-standard-library-tour", title: "continuing-our-standard-library-tour" },
            { id: "the-datetime-module-handling-dates-and-times", title: "the-datetime-module-handling-dates-and-times" },
            { id: "common-operations", title: "common-operations" },
            { id: "example-1-logging-events-with-timestamps", title: "example-1-logging-events-with-timestamps" },
            { id: "example-2-calculating-time-differences", title: "example-2-calculating-time-differences" },
            { id: "example-3-loading-configuration-from-json-files", title: "example-3-loading-configuration-from-json-files" },
            { id: "Quiz-time", title: "Quiz-time" },
          ],
        },
        {
          type: "file",
          id: "17-07-virtual_environments",
          title: "virtual_environments",
          component: virtualenvironments,
          sections: [
            { id: "managing-project-dependencies", title: "managing-project-dependencies" },
            { id: "what-is-pip", title: "what-is-pip" },
            { id: "creating-and-using-virtual-environments-venv", title: "creating-and-using-virtual-environments-venv" },
            { id: "example-1-creating-and-activating-conceptual-steps", title: "example-1-creating-and-activating-conceptual-steps" },
            { id: "example-2-installing-a-package-and-freezing", title: "example-2-installing-a-package-and-freezing" },
            { id: "example-3-installing-from-requirements-txt", title: "example-3-installing-from-requirements-txt" },
            { id: "Quiz-time", title: "Quiz-time" },
          ],
        },
        {
          type: "file",
          id: "17-08-intro_to_requests_library",
          title: "intro_to_requests_library",
          component: introtorequestslibrary,
          sections: [
            { id: "introduction-to-requests-http-library", title: "introduction-to-requests-http-library" },
            { id: "making-web-requests", title: "making-web-requests" },
            { id: "making-a-simple-get-request", title: "making-a-simple-get-request" },
            { id: "response-object-attributes-and-methods", title: "response-object-attributes-and-methods" },
            { id: "passing-parameters-in-urls-get-requests", title: "passing-parameters-in-urls-get-requests" },
            { id: "example-1-checking-website-status", title: "example-1-checking-website-status" },
            { id: "example-2-fetching-json-data-from-an-api", title: "example-2-fetching-json-data-from-an-api" },
            { id: "example-3-simple-post-request", title: "example-3-simple-post-request" },
            { id: "Quiz-time", title: "Quiz-time" },
          ],
        },
        {
          type: "file",
          id: "17-09-intro_to_numpy_pandas",
          title: "intro_to_numpy_pandas",
          component: introtonumpyandpandas,
          sections: [
            { id: "introduction-to-requests-http-library", title: "introduction-to-requests-http-library" },
            { id: "entering-the-world-of-data-science", title: "entering-the-world-of-data-science" },
            { id: "numpy-efficient-numerical-arrays", title: "numpy-efficient-numerical-arrays" },
            { id: "pandas-data-structures-for-analysis", title: "pandas-data-structures-for-analysis" },
            { id: "example-1-basic-numpy-array-manipulation", title: "example-1-basic-numpy-array-manipulation" },
            { id: "example-2-reading-csv-data-with-pandas", title: "example-2-reading-csv-data-with-pandas" },
            { id: "example-3-filtering-pandas-dataframe", title: "example-3-filtering-pandas-dataframe" },
            { id: "Quiz-time", title: "Quiz-time" },
          ],
        },
        {
          type: "file",
          id: "17-10-intro_to_flask_django",
          title: "intro_to_flask_django",
          component: introtoflaskdjango,
          sections: [
            { id: "introduction-to-web-frameworks-flask-django", title: "introduction-to-web-frameworks-flask-django" },
            { id: "flask-the-microframework", title: "flask-the-microframework" },
            { id: "minimal-flask-example", title: "minimal-flask-example" },
            { id: "django-the-batteries-included-framework", title: "django-the-batteries-included-framework" },
            { id: "minimal-django-example-conceptual-steps", title: "minimal-django-example-conceptual-steps" },
            { id: "example-1-flask-with-dynamic-route", title: "example-1-flask-with-dynamic-route" },
            { id: "example-2-flask-with-html-templates-conceptual", title: "example-2-flask-with-html-templates-conceptual" },
            { id: "example-3-django-view-returning-json-conceptual", title: "example-3-django-view-returning-json-conceptual" },
            { id: "Quiz-time", title: "Quiz-time" },
          ],
        },
        {
          type: "file",
          id: "basic_testing_with_unittest",
          title: "basic_testing_with_unittest",
          component: basictestingwithunittest,
          sections: [
            { id: "testing-your-code", title: "testing-your-code" },
            { id: "why-test-your-code", title: "why-test-your-code" },
            { id: "introduction-to-unittest", title: "introduction-to-unittest" },
            { id: "writing-a-simple-test", title: "writing-a-simple-test" },
            { id: "running-tests", title: "running-tests" },
            { id: "common-unittest-testcase-assertions", title: "common-unittest-testcase-assertions" },
            { id: "Quiz-time", title: "Quiz-time" },
          ],
        },
        {
          type: "file",
          id: "pep-8-and-code-style",
          title: "pep-8-and-code-style",
          component: pep8andcodestyle,
          sections: [
            { id: "pep-8-and-code-style", title: "pep-8-and-code-style" },
            { id: "why-code-style-matters", title: "why-code-style-matters" },
            { id: "key-pep-8-guidelines", title: "key-pep-8-guidelines" },
            { id: "tools-for-style-checking-and-formatting", title: "tools-for-style-checking-and-formatting" },
            { id: "quiz-time", title: "quiz-time" },
          ],
        },
        {
          type: "file",
          id: "course_review_and_project_ideas",
          title: "course_review_and_project_ideas",
          component: coursereviewandprojectideas,
          sections: [
            { id: "course-review-project-ideas", title: "course-review-project-ideas" },
            { id: "month-1-python-foundations", title: "month-1-python-foundations" },
            { id: "month-2-data-structures-functions", title: "month-2-data-structures-functions" },
            { id: "month-3-intermediate-advanced-python", title: "month-3-intermediate-advanced-python" },
            { id: "consolidating-your-knowledge-project-ideas", title: "consolidating-your-knowledge-project-ideas" },
            { id: "tips-for-projects", title: "tips-for-projects" },
            { id: "Quiz-time", title: "Quiz-time" },
          ],
        },
        {
          type: "file",
          id: "17-14-further_learning_resources",
          title: "further_learning_resources",
          component: furtherlearningresources,
          sections: [
            { id: "further-learning-resources", title: "further-learning-resources" },
            { id: "official-python-documentation", title: "official-python-documentation" },
          ],
        },
        {
          type: "file",
          id: "17-15-further_learning_resources",
          title: "furtherlearningresources",
          component: furtherlearning,
          sections: [
            { id: "final-qa-and-wrap-up", title: "final-qa-and-wrap-up" },
            { id: "final-words", title: "final-words" },
          ]
        }
      ],
    },
  ],
  instructor: "",
  category: "",
  tags: []
};



export default pythonCourse;
