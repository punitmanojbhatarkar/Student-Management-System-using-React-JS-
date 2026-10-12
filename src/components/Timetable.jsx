import React from 'react';

const Timetable = () => {
  return (
    <section>
      <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '1.5rem', overflowX: 'auto', boxShadow: 'var(--shadow-sm)' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '1rem' }}>
          <div>
            <h3 style={{ margin: 0, color: '#2d3748' }}>DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING (DATA SCIENCE)</h3>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#718096' }}>Semester: V | Academic Year: 2026-2027 | W.E.F: 7/27/2026</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Class Coordinator: Mrs. Aparna Kulkarni</p>
            <p style={{ margin: 0, fontSize: '0.875rem' }}>Theory: 11 | Practical: 16 | Total: 27</p>
          </div>
        </div>

        <table className="prof-table" style={{ borderCollapse: 'collapse', border: '1px solid #e2e8f0', minWidth: '1000px' }}>
          <thead>
            <tr style={{ background: '#edf2f7' }}>
              <th style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}>Day / Time</th>
              <th style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}>8:30 - 9:25</th>
              <th style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}>9:25 - 10:20</th>
              <th style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', width: '20px' }}>B<br/>R<br/>E<br/>A<br/>K</th>
              <th style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}>10:30 - 11:25</th>
              <th style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', width: '20px' }}>L<br/>U<br/>N<br/>C<br/>H</th>
              <th style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}>12:20 - 13:15</th>
              <th style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}>13:15 - 14:10</th>
              <th style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}>14:10 - 15:05</th>
              <th style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', width: '20px' }}>B<br/>R<br/>E<br/>A<br/>K</th>
              <th style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}>15:10 - 16:00</th>
              <th style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}>16:00 - 16:50</th>
              <th style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', width: '20px' }}>B<br/>R<br/>E<br/>A<br/>K</th>
              <th style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}>16:55 - 17:45</th>
              <th style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}>17:45 - 18:25</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', fontWeight: 'bold', textAlign: 'center' }}>MON</td>
              <td colSpan="2" style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#f7fafc' }}>GUEST TALK</td>
              <td rowSpan="6" style={{ border: '1px solid #cbd5e0', background: '#e2e8f0', textAlign: 'center' }}>S<br/>H<br/>O<br/>R<br/>T</td>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#ebf8ff' }}>
                <strong>A1-FD</strong>-AK-E322
              </td>
              <td rowSpan="6" style={{ border: '1px solid #cbd5e0', background: '#e2e8f0', textAlign: 'center' }}>L<br/>U<br/>N<br/>C<br/>H</td>
              <td colSpan="3" style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#f0fff4' }}>
                <strong>A1-DAA Lab</strong>-RD-E325<br/>
                <strong>A2-FD</strong>-AK-E322
              </td>
              <td rowSpan="6" style={{ border: '1px solid #cbd5e0', background: '#e2e8f0', textAlign: 'center' }}>S<br/>H<br/>O<br/>R<br/>T</td>
              <td colSpan="2" style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#f7fafc' }}>MAKE UP/PROBLEM SOLVING</td>
              <td rowSpan="6" style={{ border: '1px solid #cbd5e0', background: '#e2e8f0', textAlign: 'center' }}>S<br/>H<br/>O<br/>R<br/>T</td>
              <td style={{ border: '1px solid #cbd5e0' }}></td>
              <td style={{ border: '1px solid #cbd5e0' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', fontWeight: 'bold', textAlign: 'center' }}>TUE</td>
              <td colSpan="2" style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#f0fff4' }}>TY- MDM LAB (BATCH I & III)</td>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#fffff0' }}>
                <strong>AgAI (PEC)</strong><br/>PV<br/>E225
              </td>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}>
                <strong>DAA</strong><br/>RD<br/>E225
              </td>
              <td colSpan="2" style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#f0fff4' }}>
                <strong>A1-DL Lab</strong>-VW-E322<br/>
                <strong>A2-AgAI (PEC) Lab</strong>-PV-E325
              </td>
              <td colSpan="2" style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#f0fff4' }}>
                <strong>A2-DAA Lab</strong>-RD-E325<br/>
                <strong>A3-DL</strong>-LK-E322
              </td>
              <td style={{ border: '1px solid #cbd5e0' }}></td>
              <td style={{ border: '1px solid #cbd5e0' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', fontWeight: 'bold', textAlign: 'center' }}>WED</td>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}>MDM TH</td>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}>MDM TH</td>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#fffff0' }}>
                <strong>AgAI (PEC)</strong><br/>PV<br/>E225
              </td>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}>
                <strong>DL</strong><br/>LK<br/>E225
              </td>
              <td colSpan="2" style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#f0fff4' }}>
                <strong>A1-AgAI (PEC) Lab</strong>-PV-E325<br/>
                <strong>A2-FD</strong>-AK-E322
              </td>
              <td colSpan="2" style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#f0fff4' }}>
                <strong>A1-FD</strong>-AK-E322<br/>
                <strong>A3-DAA Lab</strong>-RD-E325
              </td>
              <td style={{ border: '1px solid #cbd5e0' }}></td>
              <td style={{ border: '1px solid #cbd5e0' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', fontWeight: 'bold', textAlign: 'center' }}>THU</td>
              <td colSpan="2" style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#f0fff4' }}>TY- MDM LAB (BATCH II & IV)</td>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#e6fffa' }}></td>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}>
                <strong>DAA</strong><br/>RD<br/>E225
              </td>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}>
                <strong>DL</strong><br/>LK<br/>E225
              </td>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#fffff0' }}>
                <strong>AgAI (PEC)</strong><br/>PV<br/>E225
              </td>
              <td colSpan="2" style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#f0fff4' }}>
                <strong>A2-DL Lab</strong>-VW-E322<br/>
                <strong>A3-AgAI (PEC) Lab</strong>-PV-E325
              </td>
              <td style={{ border: '1px solid #cbd5e0' }}></td>
              <td style={{ border: '1px solid #cbd5e0' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', fontWeight: 'bold', textAlign: 'center' }}>FRI</td>
              <td colSpan="2" style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#f7fafc' }}>OFFICE HOURS</td>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#fff5f5' }}>PROJECT</td>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}></td>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}>
                <strong>DAA</strong><br/>RD<br/>E225
              </td>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}>
                <strong>DL</strong><br/>LK<br/>E225
              </td>
              <td colSpan="2" style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#fff5f5' }}>PROJECT</td>
              <td style={{ border: '1px solid #cbd5e0' }}></td>
              <td style={{ border: '1px solid #cbd5e0' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', fontWeight: 'bold', textAlign: 'center' }}>SAT</td>
              <td colSpan="2" style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#f7fafc' }}>SPORTS SESSION</td>
              <td style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center' }}></td>
              <td colSpan="3" style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#f0fff4' }}>
                <strong>A3-MAD Lab</strong>-JD-E324
              </td>
              <td colSpan="2" style={{ border: '1px solid #cbd5e0', padding: '8px', textAlign: 'center', background: '#f0fff4' }}>
                <strong>A3-MAD Lab</strong>-JD-E325
              </td>
              <td style={{ border: '1px solid #cbd5e0' }}></td>
              <td style={{ border: '1px solid #cbd5e0' }}></td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h4 style={{ marginBottom: '0.5rem' }}>Course Details</h4>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '0.875rem', color: '#4a5568' }}>
              <li><strong>DAA</strong>: Design Analysis of Algorithms (Mrs. Ritu Dudhmal - RD)</li>
              <li><strong>DL</strong>: Deep Learning and Large Language Models (Mrs. Laxmi Kale - LK)</li>
              <li><strong>AgAI</strong>: Agentic AI Foundation (Mr. Pankaj Vishwakarma - PV)</li>
              <li><strong>FD</strong>: AI-Powered Full Stack Development (Mrs. Aparna Kulkarni - AK)</li>
              <li><strong>MAD</strong>: AI-First Mobile App Development (Mr. Jayant Devare - JD)</li>
            </ul>
          </div>
          <div>
             <h4 style={{ marginBottom: '0.5rem' }}>Batches</h4>
             <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '0.875rem', color: '#4a5568' }}>
               <li><strong>A1, A2, A3</strong>: Practical Lab Batches</li>
             </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timetable;
