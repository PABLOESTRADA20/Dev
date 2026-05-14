"use client"

import React from "react"
import { Terminal, Layers } from "lucide-react"

export default function ExplorePage() {
  return (
    <main className="explore">
      {/* Hero Section */}
      <section className="section">
        <h2 style={{ fontSize: '48px', fontWeight: 900, color: 'var(--text-h)', lineHeight: 1.1, letterSpacing: '-2px', marginBottom: '1rem' }}>
          Find your <br /><span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>collective.</span>
        </h2>
        <p style={{ color: 'var(--text)', fontSize: '16px', maxWidth: '450px', lineHeight: 1.6 }}>
          Connect with developers building the future. Join specialized hubs of expertise, from systems programming to high-end UI engineering.
        </p>
      </section>

      {/* Filtros */}
      <div className="tags-row" style={{ marginBottom: '32px' }}>
        <button className="tag-pill active">All Communities</button>
        <button className="tag-pill">Rust</button>
        <button className="tag-pill">Web3</button>
        <button className="tag-pill">Backend</button>
        <button className="tag-pill">UI/UX</button>
      </div>

      {/* Trending Section */}
      <section className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div className="tag-dot" style={{ background: 'var(--tertiary)' }}></div>
            <h3 className="section-title" style={{ fontSize: '18px' }}>Trending</h3>
          </div>
          <span className="section-label">View All</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="featured-card">
            <div className="featured-img">
              <div className="featured-badge">Fastest Growing</div>
            </div>
            <div className="featured-body">
              <h4 className="featured-title">Web3 Builders</h4>
              <p className="featured-desc">
                Engineering the decentralized future with Ethereum, Solana, and Rust-based smart contracts.
              </p>
              <div className="featured-footer">
                <div className="post-stat">
                  <span className="count">12.4k</span> Members
                </div>
                <button className="follow-btn">Join Collective</button>
              </div>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-pic" style={{ borderRadius: '8px' }}>R</div>
            <div className="profile-info">
              <div className="profile-name-row">
                <span className="profile-name">Rustaceans</span>
                <span className="profile-online" style={{ background: 'var(--online)' }}></span>
              </div>
              <p className="profile-bio">8.1k members • 242 online</p>
            </div>
            <button className="follow-btn outline">View</button>
          </div>
        </div>
      </section>

      {/* Mis Grupos */}
      <section className="section">
        <div className="section-header">
          <h3 className="section-title" style={{ fontSize: '18px' }}>My Groups</h3>
          <span className="section-label">Manage</span>
        </div>

        <div className="mini-grid">
          <div className="mini-card">
            <div className="mini-icon purple">
              <Terminal size={18} />
            </div>
            <div className="mini-title">Go Microservices</div>
            <div className="mini-meta">4.2k mems</div>
          </div>

          <div className="mini-card">
            <div className="mini-icon pink">
              <Layers size={18} />
            </div>
            <div className="mini-title">Typescript Pro</div>
            <div className="mini-meta">21k mems</div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section" style={{
        background: 'var(--bg-surface)',
        padding: '32px',
        borderRadius: '16px',
        border: '1px solid var(--border)',
        textAlign: 'center'
      }}>
        <h5 style={{ color: 'var(--text-h)', fontSize: '24px', fontWeight: 900, marginBottom: '8px' }}>Build Together.</h5>
        <p style={{ color: 'var(--text)', fontSize: '14px', marginBottom: '24px' }}>
          Upgrade to Sanctum Pro for private collectives.
        </p>
        <button className="navbar-cta" style={{ maxWidth: '200px', margin: '0 auto' }}>Go Premium</button>
      </section>
    </main>
  )
}