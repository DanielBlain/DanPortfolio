import React from 'react'


const PageStyle = () => {
    return (
        <div>
            <h1>Style Test Page</h1>
            <section>
                <form>
                    <fieldset>
                        <legend>Theme</legend>

                        <p>
                            <label htmlFor='themeName'>
                                <div>
                                    Name
                                    <button>X</button>
                                </div>
                                <input type='input' list='themeList' id='themeName' />
                                <datalist id='themeList'>
                                    <option value='dan-informational'></option>
                                </datalist>
                            </label>
                        </p>

                        <p>
                            <label htmlFor='personality'>
                                <div>
                                    Personality
                                    <button>X</button>
                                </div>
                                <input type='text' id='personality' name='personality' />
                                <div>
                                    include bigger output of personality somewhere visible
                                </div>
                            </label>
                        </p>

                        <fieldset>
                            <legend>Palette</legend>

                            <label htmlFor='numColors'>
                                <div>
                                    Number of colors
                                </div>
                                <input type='radio' id='numColors2' name='radio' value='numColors2' />2
                                <input type='radio' id='numColors3' name='radio' value='numColors3' />3
                                <input type='radio' id='numColors4' name='radio' value='numColors4' />4
                                <input type='radio' id='numColors5' name='radio' value='numColors5' />5
                            </label>

                            <label htmlFor='color'>Color Picker</label>
                            <input type='color' id='color' name='color' />
                        </fieldset>

                        <fieldset>
                            <legend>Metrics</legend>

                            <label htmlFor='selectUnits'>
                                <div>Units</div>
                                <select id='selectUnits' name='selectUnits'>
                                    <option value='rem'>rem</option>
                                    <option value='em'>em</option>
                                    <option value='px'>px</option>
                                </select>
                            </label>
                            
                            <label htmlFor='pageMargin'>
                                <div>Page Margin</div>
                                <input type='number' id='pageMargin' name='pageMargin' />
                            </label>
                            
                            <label htmlFor='verticalRhythm'>
                                <div>Vertical Rhythm</div>
                                <input type='number' id='verticalRhythm' name='verticalRhythm' />
                            </label>
                            
                            <div>Header Margins</div>
                            <label htmlFor='h1Margins'>
                                <input type='number' id='h1MarginTop' name='h1MarginTop' />
                                <input type='number' id='h1MarginBottom' name='h1MarginBottom' />
                            </label>
                        </fieldset>

                        <fieldset>
                            <legend>Header elements</legend>
                        </fieldset>
                        delineation as an expression of personality and theme:
headers and titles
whitespace usage
section and paragraph breaks
media queries
depth of style: e.g. shadows and animation                        
                    </fieldset>
                </form>
            </section>
            <p>
                The HTML should not be the PLANNING, but the RESULT of the following considerations. <br />
                Brainstorming the things to consider:
                <ul>
                    <li>HTML IS BOTTOM-MOST LEVEL</li>
                    <li>SECOND BOTTOM-MOST IS:</li>
                    <li>vertical pacing</li>
                    <li>section header design</li>
                    <li>h1..h6 scale & design</li>
                    <li>emphasis design</li>
                    <li>page header design</li>
                    <li>paragraph design</li>
                    <li>sidebars design</li>
                    <li>THIRD IS:</li>
                    <li>personality</li>
                    <li>theme</li>
                    <li>delineation as an expression of personality and theme: <br />
                        <ul>
                            <li>headers and titles</li>
                            <li>whitespace usage</li>
                            <li>section and paragraph breaks</li>
                            <li>media queries</li>
                        </ul>
                    </li>
                    <li>depth of style: e.g. shadows and animation</li>
                </ul>
            </p>

            <h2>Text Elements</h2>
            <p>This is a <b>bold</b> text and this is <i>italic</i> text.</p>
            <p>Here is an <em>emphasized</em> text and <strong>strong</strong> text.</p>
            <p>A link to <a href='https://www.example.com' target='_blank' rel='noopener noreferrer'>Example.com</a></p>
            <blockquote cite='https://www.example.com'>This is a blockquote from a source.</blockquote>
            <pre>This 
                is preformatted
                text!
            </pre>
            <code>
                HTML code
                void main ( int a, int b, int c )
                etc
            </code>
            <p>
                This is a keyboard button: <kbd>CTRL-A</kbd>
            </p>

            <h2>Images</h2>
            <img src='/20240411_111604.jpg' alt='A poor drawing of a valiant knight wreathed in electrical magic' style={{maxWidth: 100+'px'}} />

            <h2>Strange HTML tags</h2>
            <abbr title="title tag can be used on every element">Careful, dunt work on mobile</abbr>
            No backend value, just for SEO purposes, time tag: <time>22:23pm</time>
            <ruby>
                Test
                <rt>Above text</rt>
                <rp>Backup above text</rp>
            </ruby>
            <p>
                Progress Tag
                <progress max='100' value='60'></progress>
            </p>
            <p>
                Metered Tag
                <meter min='0' max='100' value='96' low='20' high='60' optimum='95'></meter>
            </p>

            <h2>Form Elements</h2>
            <form>
                <fieldset>
                    <legend>Sample Form</legend>

                    <label htmlFor='text'>Text Input</label>
                    <input type='text' id='text' name='text' />

                    <label htmlFor='password'>Password Input</label>
                    <input type='password' id='password' name='password' autoComplete="current-password" required />

                    <label htmlFor='number'>Number Input</label>
                    <input type='number' id='number' name='number' />

                    <label htmlFor='checkbox'>Checkbox</label>
                    <input type='checkbox' id='checkbox' name='checkbox' />

                    <label htmlFor='radio'>Radio Button</label>
                    <input type='radio' id='radio' name='radio' value='option1' /> Option 1
                    <input type='radio' id='radio2' name='radio' value='option2' /> Option 2

                    <label htmlFor='color'>Color Picker</label>
                    <input type='color' id='color' name='color' />

                    <label htmlFor='date'>Date Input</label>
                    <input type='date' id='date' name='date' />

                    <label htmlFor='range'>Range Slider</label>
                    <input type='range' id='range' name='range' min='0' max='100' />

                    <label htmlFor='textarea'>Textarea</label>
                    <textarea id='textarea' name='textarea' rows='4' cols='50'></textarea>

                    <label htmlFor='select'>Dropdown Select:</label>
                    <select id='select' name='select'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    </select>

                    <input type="input" className="colorSelect" list="colors" />
                    <datalist id="colors">
                        <option value="red"></option>
                        <option value="blue"></option>
                        <option value="brown"></option>
                        <option value="green"></option>
                    </datalist>

                    <button type='reset'>Reset</button>
                    <button type='submit'>Submit</button>
                </fieldset>
            </form>

            <h2>Other Elements</h2>
            <details>
                <summary>Details Element</summary>
                <p>This is some hidden content revealed by the details element.</p>
            </details>
            <table border='1'>
                <caption>Sample Table</caption>
                <thead>
                    <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Row 1, Col 1</td>
                        <td>Row 1, Col 2</td>
                    </tr>
                    <tr>
                        <td>Row 2, Col 1</td>
                        <td>Row 2, Col 2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PageStyle